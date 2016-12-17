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
      orderBy: 'name',
      equalTo: params.name
    }).then(function(data) {
      return data.get('firstObject');
    });
  },
  serialize(model) {
    return {
      char: model.get('name')
    };
  }
});
