import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  // Whole show actions

  // Character actions
  addChar(name, show) {
    Ember.Logger.info("adding char " + name + " to show " + show);
    let char1 = this.get('store').createRecord('character', {
      name: name
    });
    char1.save();
    show.get('characters').pushObject(char1);
    show.save();
  },
  deleteChar(char) {
    let show = this.get('show');
    Ember.Logger.info('deleting char ' + char.get('name') + ' from show ' + show.get('name'));
    // first delete their notes
    this.send('deleteAllNotes', char);
    char.deleteRecord();
    char.save();
    // update the show
    show.save();
  },
  editChar(char) {
    Ember.logger.info('Editing char ' + char);
    char.save();
  },

  // Note actions
  addNote(char, page, line, note, error) {
    let newNote = this.get('store').createRecord('line-note', {
      page: page,
      line: line,
      note: note,
      error: error,
      date: new Date()
    });
    newNote.set('character', char);
    Ember.Logger.info('adding note ' + newNote);
    newNote.save();
    char.save();
  },
  deleteNote(char, note) {
    Ember.Logger.info('deleting ' + note.get('id') + ' from character ' + char.get('name'));
    note.deleteRecord();
    note.save();
    char.save();
  },
  deleteAllNotes(char) {
    char.get('notes').forEach((note) => {
      Ember.run.once(this, () => {
        this.send('deleteNote', char, note);
      });
    });
  },
  editNote(note) {
    Ember.Logger.info('editing note ' + note);
    note.save();
  }
});