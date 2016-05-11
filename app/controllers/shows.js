import Ember from 'ember';

export default Ember.Controller.extend({
  newShow: this.store.createRecord('show');

  actions: {
    createShow(name) {
      console.log("creating new show: " + name);
      let show1 = this.store.createRecord('show', {
        name: name
      });
      show1.save();
    },
    deleteShow(show) {
      show.destroyRecord();
      this.transitionTo('shows');
    }
  }
});
