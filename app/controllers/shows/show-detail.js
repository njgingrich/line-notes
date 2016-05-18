import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),
  notify: Ember.inject.service('notify'),
  openModal: false,

  actions: {
    openAddCharModal() {
      this.set('openModal', true);
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
    deleteShow(show) {
      console.log('deleting show ' + show.get('name'));
      // delete its characters
      show.get('characters').forEach((character) => {
        Ember.run.once(this, () => {
          console.log('char: ' + character);
          character.deleteRecord();
          character.save();
        });
      });

      // TODO: delete each character's line notes

      show.deleteRecord();
      show.save();
      this.transitionToRoute('shows');
    }
  }
});
