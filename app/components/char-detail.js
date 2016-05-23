import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  openModal: false,

  actions: {
    openAddNoteModal() {
      this.set('openModal', true);
    },
    resetModal() {
      this.set('name', '');
      this.set('openModal', false);
    },
    editChar() {
      console.log("key press submit");
      this.toggleProperty('isEditing');
      this.attrs.editChar();
    }
  }
});
