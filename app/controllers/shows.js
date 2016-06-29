import Ember from 'ember';

export default Ember.Controller.extend({
  openModal: false,
  newShowName: '',

  actions: {
    addChar(show, name) {
      let char1 = this.store.createRecord('character', {
        name: name
      });
      char1.save();
      show.get('characters').pushObject(char1);
      show.save();
    }
  }
});
