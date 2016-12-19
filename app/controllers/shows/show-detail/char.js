import Ember from 'ember';

export default Ember.Controller.extend({
  char: Ember.computed.alias('model'),
  showActions: Ember.inject.service(),
  notify: Ember.inject.service(),
  isShowingCreateModal: false,

  actions: {
    toggleModal() {
      this.toggleProperty('isShowingCreateModal');
    },
    addNote(char, page, line, note, error) {
      this.get('showActions').addNote(char, page, line, note, error);
      this.send('toggleModal');
      this.get('notify').success('Added new note!');
    },
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
    addChar() {
      let name = this.get('newCharName');
      let show = this.get('show');
      this.get('showActions').addChar(name, show);
      this.get('notify').success('Added new character!');
      // reset the input
      this.set('newCharName', '');
    },
    deleteChar(char) {
      let show = this.get('show');
      this.get('showActions').deleteChar(char, show);
      this.get('notify').alert('Character deleted!');
    },
    editChar(char) {
      this.toggleProperty('isEditing');
      if (!this.get('isEditing')) {
        this.get('showActions').editChar(char);
      }
    }
  }
});
