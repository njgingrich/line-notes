import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  /* Whole show actions */
  createShow(name) {
    let show1 = this.store.createRecord('show', {
      name: name
    });
    show1.save();
  },
  deleteShow(show) {
    // delete its characters
    this.deleteAllChars(show).then(() => {
      show.destroyRecord();
    });
  },
  editShow(show) {
    show.save();
  },

  /* Character actions */
  addChar(name, show) {
    Ember.Logger.info("adding char " + name + " to show " + show);
    let char1 = this.get('store').createRecord('character', {
      name: name
    });
    char1.save();
    show.get('characters').pushObject(char1);
    show.save();
  },
  deleteAllChars(show) {
    show.get('characters').forEach((char) => {
       this.deleteAllNotes(char);
    });
    let promise = Ember.RSVP.all(show.get('characters').invoke('destroyRecord'));
    return promise;
  },
  deleteChar(char, show) {
    Ember.Logger.info('deleting char ' + char.get('name') + ' from show ' + show.get('name'));
    // first delete their notes
    this.deleteAllNotes(char).then(() => {
      char.destroyRecord().then(() => {
        // update the show
        show.save();
      });
    }, err => {
      Ember.logger.warn('Error deleting char: ' + err);
    });

  },
  editChar(char) {
    Ember.logger.info('Editing char ' + char);
    char.save();
  },

  /* Note actions */
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
    let promise = Ember.RSVP.all(char.get('notes').invoke('destroyRecord'));
    return promise;
  },
  editNote(note) {
    Ember.Logger.info('editing note ' + note);
    note.save();
  },

  /* User actions */
  createUser(uid, displayName) {
    let newUser = this.get('store').createRecord('user', {
      name: displayName,
      uid: uid
    });
    newUser.save();
  },
  createUserIfNotExists(uid, displayName) {
    this.get('store').findRecord('user', uid).then((user) => {
      console.log('user already exists: ' + user);
    }, (err) => {
      console.log('creating new user:' + err);
      this.createUser(uid, displayName);
    });
  },
  addAssignedUser(show, user) {
    user.get('shows').pushObject(show).then(() => {
      user.save();
    });
    show.get('assignedUsers').pushObject(user).then(() => {
      show.save();
    });
  },
  removeAssignedUser(show, user) {
    show.get('assignedUsers').removeObject(user);
    show.save();
  },
});
