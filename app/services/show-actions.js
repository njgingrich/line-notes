import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  /* Whole show actions */
  createShow(name) {
    let show1 = this.store.createRecord('show', {
      name: name,
      slug: name.dasherize()
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
    show.set('slug', show.get('name').dasherize());
    show.save();
  },

  /* Character actions */
  addChar(name, show) {
    Ember.Logger.info("adding char " + name + " to show " + show);
    let char1 = this.get('store').createRecord('character', {
      name: name,
      slug: name.dasherize()
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
    Ember.Logger.info('deleting char ' + char.get('name') + ' from show ' + show);
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
    Ember.Logger.info('Editing char ' + char);
    char.set('slug', char.get('name').dasherize());
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
  createUser(uid, displayName, email) {
    if (displayName === undefined) {
      displayName = email;
    }
    let newUser = this.get('store').createRecord('user', {
      name: displayName,
      uid: uid,
      email: email
    });
    newUser.save();
  },
  createUserIfNotExists(uid, displayName, email) {
    console.log(uid);
    this.get('store').findAll('user', {reload: true}).then((users) => {
      let create = true;
      users.forEach((user) => {
        if (uid = user.uid) {
          console.log('User already in database.');
          create = false;
          // TODO: fix this, it's doesn't scale ( O(n) )
          // findRecord('user', uid) wasn't working
          return;
        }
      });
      if (create) {
        console.log('new user, creating');
        this.createUser(uid, displayName, email);
      }
    });
    /*this.get('store').findRecord('user', uid).then((user) => {
      console.log('user already exists: ' + user);
    }, (err) => {
      console.log('creating new user:' + err);
      this.createUser(uid, displayName);
    });*/
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
  getAllUsers() {
    return this.get('store').findAll('user');
  },
  getAllUsernames() {
    return this.get('store').findAll('user').then((users) => {
      let usernames = Ember.A();
      users.forEach((user) => {
        console.log(user.get('name'));
        console.log(user.get('email'));
        if (user.get('name') === null) {
          usernames.pushObject(user.get('email'));
        } else {
          usernames.pushObject(user.get('name'));
        }
      });
      console.log(usernames);
      return usernames;
    });
  }
});
