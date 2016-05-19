import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('show', params.name);
  },

  setupController(controller, model) {
    this._super(controller, model);
    let chars = model.get('characters');
    let charArray = chars.sortBy('name');
    controller.set('activeChar', charArray[0]);
  }
});
