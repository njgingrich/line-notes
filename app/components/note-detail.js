import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,
  buttonType: Ember.computed('isEditing', function() {
    if (this.get('isEditing')) {
      return 'btn btn-success';
    } else {
      return 'btn btn-warning';
    }
  }),

  actions: {
    editNote() {
      this.toggleProperty('isEditing');
      this.attrs.edit(this.get('note'));
    }
  }
});
