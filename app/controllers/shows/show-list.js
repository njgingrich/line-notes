import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  showActions: Ember.inject.service('show-actions'),
  editedShow: undefined,
  openModal: false,
  openAddModal: false,
  addingAssignedUser: false,
  confirmText: 'Edit',

  actions: {
    fileLoaded(file) {
      console.log(file.name, file.type, file.data, file.size);
      this.send('updateModalButton');
    },
    showModal(name, model) {
      this.sendAction('showModal', name, model);
    },
    toggleAddShowModal() {
      this.set('newShowName', '');
      this.toggleProperty('openAddModal');
    },
    createShow(name) {
      console.log(name);
      this.get('showActions').createShow(name);
      this.set('openAddModal', false);
    },
    deleteShow(show) {
      console.log('deleting show ' + show.get('name'));
      this.get('showActions').deleteShow(show);
      this.get('notify').alert('Show deleted!');
    },
    editShow(show) {
      this.get('showActions').editShow(show);
      this.set('openModal', false);
    },
    updateModalButton() {
      this.set('confirmText', 'Save');
    },
    addAssignedUser(show) {
      this.toggleProperty('addingAssignedUser');
      let names = this.get('showActions').getAllUsernames();
      console.log(names);
    },
    removeAssignedUser() {
      console.log('TODO');
    }
  }
});
