import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['colorTable'],
  isEditing: false,
  richTextLine: Ember.computed('note.line', 'note.note', function() {
    let boldText = `<b>${this.get('note.note')}</b>`;
    if (this.get('note.line')) {
      let newText = this.get('note.line').replace(this.get('note.note'), boldText);
      return newText;
    }
    return '';
  }),
  colorTable: Ember.computed('isEditing', function() {
    if (this.get('isEditing')) {
      return 'warning';
    }
    return '';
  }),
  errorTypes: Ember.inject.service('error-types'),
  testFunction(model) {
    console.log("item callback");
  },

  actions: {
    editNote() {
      this.attrs.edit(this.get('note'));
    }
  }
});
