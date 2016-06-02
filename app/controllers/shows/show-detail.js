import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),
  notify: Ember.inject.service('notify'),
  activeChar: null,
  newCharName: '',
  sortedChars: Ember.computed('model.characters', function() {
    let sorted = this.get('model.characters');
    return sorted.sortBy('name');
  }),

  actions: {
    selectChar(char) {
      this.set('activeChar', char);
      window.scrollTo(0,0);
      console.log("selecting " + char);
    },
    addNote(char, page, line, note, error) {
      let newNote = this.store.createRecord('line-note', {
        page: page,
        line: line,
        note: note,
        error: error,
        date: new Date()
      });
      newNote.set('character', char);
      console.log('adding note ' + newNote);
      newNote.save();
      char.save();
      this.get('notify').success('Added new note!');
    },
    editNote(note) {
      console.log('editing note ' + note);
      console.log('error: ' + note.get('error'));
      note.save();
    },
    deleteNote(char, note) {
      console.log('deleting ' + note.get('id') + ' from character ' + char.get('name'));
      note.deleteRecord();
      note.save();
      char.save();
      this.get('notify').alert('Note deleted!');
    },
    deleteAllNotes(char) {
      char.get('notes').forEach((note) => {
        Ember.run.once(this, () => {
          this.send('deleteNote', char, note);
        });
      });
    },
    addChar() {
      let name = this.get('newCharName');
      let show = this.get('show');
      console.log("adding char " + name + " to show " + show);
      let char1 = this.store.createRecord('character', {
        name: name
      });
      char1.save();
      show.get('characters').pushObject(char1);
      show.save();
      this.get('notify').success('Added new character!');

      // reset the input
      this.set('newCharName', '');
    },
    deleteChar(char) {
      let show = this.get('show');
      console.log('deleting char ' + char.get('name') + ' from show ' + show.get('name'));
      // first delete their notes
      this.send('deleteAllNotes', char);
      char.deleteRecord();
      char.save();
      // update the show
      show.save();
      this.get('notify').alert('Character deleted!');
    },
    editChar(char) {
      this.set('activeChar', char);
      this.toggleProperty('isEditing');
      if (!this.get('isEditing')) {
        char.save();
      }
    }
  }
});
