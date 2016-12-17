import Ember from 'ember';

export default Ember.Controller.extend({
  char: Ember.computed.alias('model'),

  actions: {
    toggleAddNoteModal() {
      this.toggleProperty('openModal');
    },
    editChar() {
      console.log("key press submit");
      this.toggleProperty('isEditing');
      this.attrs.editChar();
    }
  }
});
