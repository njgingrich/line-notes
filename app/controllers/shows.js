import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createShow(name) {
      console.log("creating new show: " + name);
      let show = this.store.createRecord('show', {
        name: name
      });
      show.save();
    }
  }
});
