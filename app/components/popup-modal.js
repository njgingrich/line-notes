import Ember from 'ember';

export default Ember.Component.extend({
  cancelText: 'Cancel',
  confirmText: 'OK',
  showing: false,
  title: '',

  actions: {
    cancelAction() {
      if (this.get('onClose')) {
        this.sendAction('onClose');
      }
      this.toggleProperty('showing');
    },
    confirmAction() {
      if (this.get('onClose')) {
        this.sendAction('onClose');
      }
      this.toggleProperty('showing');
    }
  }
});
