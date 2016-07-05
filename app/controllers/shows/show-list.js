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
    openModal(type, show) {
      if (type === "edit") {
        this.send('toggleEditShowModal', show);
      } else {
        this.send('toggleAddShowModal');
      }
    },
    toggleAddShowModal() {
      this.set('newShowName', '');
      this.toggleProperty('openAddModal');
    },
    toggleEditShowModal(show) {
      this.toggleProperty('openModal');
      if (this.get('openModal')) {
        this.set('editedShow', show);
      }
    },
  }
});
