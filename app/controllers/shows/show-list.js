import Ember from 'ember';

export default Ember.Controller.extend({
  showActions: Ember.inject.service(),
  notify: Ember.inject.service(),
  addingAssignedUser: false,

  actions: {
    deleteShow(show) {
      console.log('deleting show ' + show.get('name'));
      this.get('showActions').deleteShow(show);
      this.get('notify').alert('Show deleted!');
    }
  }
});
