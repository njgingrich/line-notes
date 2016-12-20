import Ember from 'ember';

export default Ember.Controller.extend({
  showActions: Ember.inject.service(),

  actions: {
    addChar(model) {
      this.get('showActions').addChar(this.get('name'), model);
      this.send('closeModal');
    }
  }
});
