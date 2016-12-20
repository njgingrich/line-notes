import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal(name, model) {
      Ember.Logger.info('Rendering modal ' + name + ' with controller ' + name);
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        controller: name,
        model: model
      });
    },
    closeModal() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
