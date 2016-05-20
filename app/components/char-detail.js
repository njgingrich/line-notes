import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  actions: {
    editChar() {
      this.toggleProperty('isEditing');
      this.attrs.editChar();
    }
  }
});
