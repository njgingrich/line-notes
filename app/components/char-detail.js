import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  openModal: false,

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
