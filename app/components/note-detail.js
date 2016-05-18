import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,
  richTextLine: Ember.computed('note.line', 'note.note', function() {
    let boldText = `<b>${this.get('note.note')}</b>`;
    if (this.get('note.line')) {
      let newText = this.get('note.line').replace(this.get('note.note'), boldText);
      //return `<b>${this.get('note.line')}</b>`;
      return newText;
    }
    return '';
  }),

  actions: {
    editNote() {
      this.attrs.edit(this.get('note'));
    }
  }
});
