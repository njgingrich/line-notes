import Ember from 'ember';

export default Ember.Component.extend({
  name: '',

  actions: {
    createChar(name) {
      let n = name;
      this.set('name', '');
      this.attrs.addChar(n);
    }
  }
});
