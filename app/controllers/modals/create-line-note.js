import Ember from 'ember';
import NoteValidations from '../../validators/line-note';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  init() {
    this.set('note', this.get('store').createRecord('line-note'))
  },
  errorTypes: Ember.inject.service(),
  showActions: Ember.inject.service(),

  actions: {
    addNote() {
      this.get('model')(this.get('note')); // perform the addNote action sent by char controller
      this.send('closeModal');
    },
    validstuff() {
      console.log(this.get('data'));
      console.log(this.get('changeset'));
    }
  }
});
