import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      Ember.run.later(() => {
        this.transitionTo('shows.show-list');
      }, 3000);
    }
  },

  model(params) {
    return this.store.query('show', {
      orderBy: 'name',
      equalTo: params.name
    }).then(function(data) {
      return data.get('firstObject');
    });
  },

  serialize(model) {
    return {
      name: model.get('name')
    };
  },

  setupController(controller, model) {
    this._super(controller, model);
    let chars = model.get('characters');
    let charArray = chars.sortBy('name');
    //controller.set('activeChar', charArray[0]);
  }
});
