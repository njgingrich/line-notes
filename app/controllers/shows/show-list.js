import Ember from 'ember';

export default Ember.Controller.extend({
notify: Ember.inject.service('notify'),

  actions: {
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

    }
  }
});
