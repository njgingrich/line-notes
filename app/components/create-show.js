import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createShow(newShow) {
      this.attrs.create(newShow.name);
    }
  }
});
