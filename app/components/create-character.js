import Ember from 'ember';

export default Ember.Component.extend({
  name: '',

  actions: {
    addChar(name) {
      let n = name;
      this.set('name', '');
      this.attrs.add(n);
    }
  }
});
