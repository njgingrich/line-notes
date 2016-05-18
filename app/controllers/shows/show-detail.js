import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),
  notify: Ember.inject.service('notify'),
  openModal: false,

  actions: {
    openAddCharModal() {
      this.set('openModal', true);
    },
    resetModal() {
      this.set('name', '');
      this.set('openModal', false);
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
      newNote.save();
      char.save();
      this.get('notify').success('Added new note!');
    },
    editNote(note) {
      console.log('editing note ' + note);
      note.save();
    },
    deleteNote(char, note) {
      console.log('deleting ' + note.get('id') + ' from character ' + char.get('name'));
      note.deleteRecord();
      note.save();
      char.save();
    },
    deleteAllNotes(char) {
      char.get('notes').forEach((note) => {
        Ember.run.once(this, () => {
          this.send('deleteNote', char, note);
        })
      })
    },
    addChar(show, name) {
      console.log("adding char " + name + " to show " + show);
      let char1 = this.store.createRecord('character', {
        name: name
      });
      char1.save();
      show.get('characters').pushObject(char1);
      show.save();
      this.get('notify').success('Added new character!');

      // reset the modal
      this.set('name', '');
      this.set('openModal', false);
    },
    deleteChar(show, char) {
      console.log('deleting char ' + char.get('name') + ' from show ' + show.get('name'));
      // first delete their notes
      this.send('deleteAllNotes', char);
      char.deleteRecord();
      char.save();
      // update the show
      show.save();
    },
    deleteShow(show) {
      console.log('deleting show ' + show.get('name'));
      // delete its characters
      show.get('characters').forEach((character) => {
        Ember.run.once(this, () => {
          this.send('deleteChar', show, character);
        });
      });

      show.deleteRecord();
      show.save();
      this.transitionToRoute('shows');
    }
  }
});
