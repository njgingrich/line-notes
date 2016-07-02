import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('show');
  },
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  }
});
