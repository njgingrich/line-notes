import Ember from 'ember';

export default Ember.Controller.extend({
  char: Ember.computed.alias('model'),
  showActions: Ember.inject.service(),
  notify: Ember.inject.service(),
  pdfGen: Ember.inject.service(),
  isEditing: false,
  newNote: this.get('store').createRecord('note');

  actions: {
    editNote(note) {
      this.get('showActions').editNote(note);
    },
    deleteNote(char, note) {
      this.get('showActions').deleteNote(char, note);
      this.get('notify').alert('Note deleted!');
    },
    deleteAllNotes(char) {
      this.get('showActions').deleteAllNotes(char);
    },
    deleteChar(char) {
      char.get('show').then((show) => {
        this.get('showActions').deleteChar(char, show);
        this.send('closeModal');
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
