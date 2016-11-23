import Ember from 'ember';

export default Ember.Component.extend({
  showActions: Ember.inject.service('show-actions'),
  show: null,
  loadUsernames: Ember.computed('showActions', function() {
    return this.get('showActions').getAllUsernames();
  }),
  userLabelCallback(user) {
    return user.get('name');
  },

  actions: {
    addAssignedUser() {
      this.toggleProperty('addingAssignedUser');/*
      this.get('showActions').getAllUsers().then((users) => {
        console.log(users);
        users.forEach((user) => {
          console.log(user.get('name'));
        });
      });*/
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
