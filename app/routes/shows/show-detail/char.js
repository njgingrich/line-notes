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
    return this.store.findRecord('character', params.char);
  }
});
