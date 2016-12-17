import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      Ember.run.later(() => {
        this.transitionTo('shows.show-list');
      }, 2000);
    }
  },

  model(params) {
    return this.store.query('character', {
      orderBy: 'friendlyName',
      equalTo: params.friendlyName
    }).then(function(data) {
      return new Promise(resolve => {
        resolve(data.get('firstObject'));
      });
    });
  },

  serialize(model) {
    if (model.get('name') == undefined) {
      return {
        char: ''
      }
    } else {
      return {
        char: model.get('friendlyName')
      };
    }
  }
});
