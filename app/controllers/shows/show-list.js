import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  showActions: Ember.inject.service('show-actions'),
  editedShow: undefined,
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
    }
  }
});
