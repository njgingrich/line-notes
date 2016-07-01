import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),
  notify: Ember.inject.service('notify'),
  showActions: Ember.inject.service('show-actions'),
  activeChar: null,
  newCharName: '',
  sortAttr: ['name'],
  sortedChars: Ember.computed.sort('model.characters', 'sortAttr'),

  actions: {
    selectChar(char) {
      this.set('activeChar', char);
      window.scrollTo(0,0);
    },
    addNote(char, page, line, note, error) {
      this.get('showActions').addNote(char, page, line, note, error);
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
      this.get('showActions').deleteChar(char);
      this.get('notify').alert('Character deleted!');
      this.set('activeChar', null);
    },
    editChar(char) {
      this.set('activeChar', char);
      this.toggleProperty('isEditing');
      if (!this.get('isEditing')) {
        this.get('showActions').editChar(char);
      }
    }
  }
});
