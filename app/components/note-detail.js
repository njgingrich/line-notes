import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isEditing: false,
  richTextLine: Ember.computed('note.line', 'note.note', function() {
    return `<b>${this.get('note.line')}</b>`;
  }),

  actions: {
    editNote() {
      this.attrs.edit(this.get('note'));
    }
  }
});
