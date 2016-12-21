import Ember from 'ember';

export default Ember.Controller.extend({
  showActions: Ember.inject.service(),
  notify: Ember.inject.service(),

  actions: {
    createShow(name) {
      console.log(name);
      this.get('showActions').createShow(name);
      this.send('closeModal');
    }
  }
});
