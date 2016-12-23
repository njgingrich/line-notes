import Ember from 'ember';
import NoteValidations from '../../validators/line-note';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  errorTypes: Ember.inject.service(),
  showActions: Ember.inject.service(),
  char: Ember.computed.alias('model.char'),
  note: Ember.computed.alias('model.note'),

  actions: {
    addNote() {
      console.log('model: ' + this.get('model'));
      Object.keys(this.get('model')).forEach(k => {
        console.log('key: ' + k);
        console.log('val: ' + this.get('model.' + k));
      })
      this.get('showActions').addNote(this.get('char'),
                                      this.get('note.page'),
                                      this.get('note.line'),
                                      this.get('note.note'),
                                      this.get('note.error'));
      this.send('closeModal');
    },
    validstuff() {
      console.log(this.get('data'));
      console.log(this.get('changeset'));
    }
  }
});
