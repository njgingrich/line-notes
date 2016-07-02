import Ember from 'ember';

export default Ember.Controller.extend({
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
      this.get('session').open('firebase', { provider: 'google'}).then(() => {
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
