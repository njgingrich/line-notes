import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: false,

  actions: {
    openAddShowModal() {
      this.set('openModal', true);
    },
    createShow(name) {
      console.log(name);
      let show1 = this.store.createRecord('show', {
        name: name
      });
      show1.save();
      this.set('openModal', false);
    },
    addChar(show, name) {
      let char1 = this.store.createRecord('character', {
        name: name
      });
      char1.save();
      show.get('characters').pushObject(char1);
      show.save();
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
