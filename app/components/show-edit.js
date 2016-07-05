import Ember from 'ember';

export default Ember.Component.extend({
  showActions: Ember.inject.service('show-actions'),
  show: null,
  loadUsernames: () => {
    console.log(this.get('showActions'));
    return this.get('showActions').getAllUsers();
  },
  userLabelCallback(user) {
    return user.get('name');
  },

  actions: {
    addAssignedUser() {
      this.toggleProperty('addingAssignedUser');
      let names = this.get('showActions').getAllUsers();
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
