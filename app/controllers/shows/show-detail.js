import Ember from 'ember';

export default Ember.Controller.extend({
  show: Ember.computed.alias('model'),

  actions: {
    createShow(name) {
      console.log("creating new show: " + name);
      let show1 = this.store.createRecord('show', {
        name: name
      });
      show1.save();
    },

    addChar(name) {
      console.log("adding char " + name);
      let char1 = this.store.createRecord('character', {
        name: name
      });
      char1.save();
      this.get('show.characters').pushObject(char1);
      this.get('show').save();
    }
  }
});
