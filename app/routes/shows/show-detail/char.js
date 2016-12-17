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
    console.log('param: ' + params.char);
    return this.store.findRecord('character', params.char);
  }
});
