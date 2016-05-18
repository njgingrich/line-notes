import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['buttonType'],
  isEditing: false,
  title: 'Edit',
  contextTitle: 'Save',
  buttonType: Ember.computed('isEditing', function() {
    if (this.get('isEditing')) {
      return 'btn-success';
    } else {
      return 'btn-warning';
    }
  }),

  click() {
    this.toggleProperty('isEditing');
    this.attrs.submit();
  }
});
