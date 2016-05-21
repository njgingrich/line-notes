import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,

  actions: {
    editChar() {
      console.log("key press submit");
      this.toggleProperty('isEditing');
      this.attrs.editChar();
    }
  }
});
