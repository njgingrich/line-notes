import Ember from 'ember';

export default Ember.Controller.extend({
  char: Ember.computed.alias('model'),
  showActions: Ember.inject.service(),
  notify: Ember.inject.service(),
  pdfGen: Ember.inject.service(),
  isEditing: false,

  actions: {
    addNote(note) {
      console.log('note passed from modal: ' + note);
      this.get('showActions').addNoteModel(this.get('char'), note);
    },
    editNote(note) {
      this.get('showActions').editNote(note);
    },
    deleteNote(note) {
      this.get('showActions').deleteNote(this.get('char'), note);
      this.get('notify').alert('Note deleted!');
    },
    deleteAllNotes(char) {
      this.get('showActions').deleteAllNotes(char);
    },
    deleteChar(char) {
      char.get('show').then((show) => {
        this.get('showActions').deleteChar(char, show);
        this.get('notify').alert('Character deleted!');
        this.transitionToRoute('shows.show-detail', show.get('slug'));
      });
    },
    editChar(char) {
      this.toggleProperty('isEditing');
      if (!this.get('isEditing')) {
        this.get('showActions').editChar(char);
      }
    },
    printNotes(char) {
      char.get('notes').then(notes => {
        this.get('pdfGen').generatePdf(char, notes);
      });
    }
  }
});
