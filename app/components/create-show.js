import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createShow(newShow) {
      let name = newShow.name;
      this.set('newShow.name', '');
      this.attrs.create(name);
    },

    addChar(name, show) {
      this.attrs.add(name, newShow);
    }
  }
});
