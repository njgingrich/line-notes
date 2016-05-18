import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  buttonType: Ember.computed('isEditing', function() {
    if (this.get('isEditing')) {
      return 'btn btn-success';
    } else {
      return 'btn btn-warning';
    }
  }),

  actions: {
    editChar() {
      this.toggleProperty('isEditing');
      this.attrs.editChar();
    }
  }
});
