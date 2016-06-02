import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  editedShow: undefined,
  openModal: false,

  actions: {
    fileLoaded(file) {
      console.log(file.name, file.type, file.size);
    },
    toggleEditShowModal(show) {
      this.toggleProperty('openModal');
      if (this.get('openModal')) {
        this.set('editedShow', show);
      }
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
      this.get('notify').alert('Show deleted!');
    },
    editShow(show) {
      show.save();
      this.set('openModal', false);
    }
  }
});
