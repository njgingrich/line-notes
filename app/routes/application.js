import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal(name, model) {
      let c = name.replace('components/', '');
      Ember.Logger.info('Rendering modal ' + name + 'with controller ' + c);
      this.render(name, {
        into: 'application',
        outlet: 'modal',
        controller: c,
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
