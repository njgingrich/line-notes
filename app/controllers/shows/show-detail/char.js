import Ember from 'ember';

export default Ember.Controller.extend({
  char: Ember.computed.alias('model'),
  showActions: Ember.inject.service(),
  notify: Ember.inject.service(),
  isShowingCreateModal: false,
  isEditing: false,

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
    }
  }
});
