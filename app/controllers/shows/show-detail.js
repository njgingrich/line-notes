import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),

  actions: {
    addChar(show, name) {
      console.log("adding char " + name + " to show " + show);
      let char1 = this.store.createRecord('character', {
        name: name
      });
      char1.save();
      show.get('characters').pushObject(char1);
      show.save();
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
    },
    deleteNote(note, char) {
      console.log('deleting ' + note.get('id') + ' from character ' + char.get('name'));
      note.deleteRecord();
      note.save();
      char.save();
    }
  }
});
