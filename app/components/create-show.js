import Ember from 'ember';

export default Ember.Component.extend({
  show: '',

  actions: {
    createShow() {
      let name = this.get('show');
      this.set('show', '');
      this.attrs.create(name);
    },

    addChar(name, show) {
      this.attrs.add(name, show);
    }
  }
});
