import Ember from 'ember';

export default Ember.Component.extend({
  enabled: false,

  actions: {
    yes() {
      this.sendAction('yes');
    }
  }
});
