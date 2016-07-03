import Ember from 'ember';

export default Ember.Controller.extend({
  showActions: Ember.inject.service('show-actions'),
  openModal: false,
  newShowName: '',
  openSideBar: false,

  actions: {
    addChar(show, name) {
      let char1 = this.store.createRecord('character', {
        name: name
      });
      char1.save();
      show.get('characters').pushObject(char1);
      show.save();
    },
    signIn() {
      this.get('session').open('firebase', { provider: 'google'}).then((user) => {
        console.log(user);
        this.get('showActions').createUserIfNotExists(user.currentUser.uid,
                                                      user.currentUser.displayName,
                                                      user.currentUser.email);
        this.transitionToRoute('shows.show-list');
      });
    },
    signOut() {
      this.get('session').close().then(() => {
        this.transitionToRoute('shows.show-list');
      });
    },
    openSettings() {
      console.log('TODO');
    }
  }
});
