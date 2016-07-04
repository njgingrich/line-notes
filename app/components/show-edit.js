import Ember from 'ember';

export default Ember.Component.extend({
  show: null,

  actions: {
    addAssignedUser(show) {
      this.toggleProperty('addingAssignedUser');
      let names = this.get('showActions').getAllUsernames();
      console.log(names);
    },
    fileLoaded(file) {
      console.log(file.name, file.type, file.data, file.size);
      this.send('updateModalButton');
    },
    onClose(show) {
      this.set('addingAssignedUser', false);
      this.attrs.edit(show);
    },
    removeAssignedUser() {
      console.log('TODO');
    },
    updateModalButton() {
      this.set('confirmText', 'Save');
    }
  }
});
