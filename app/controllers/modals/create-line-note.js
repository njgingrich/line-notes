import Ember from 'ember';
import NoteValidations from '../../validators/line-note';
import Changeset from 'ember-changeset';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.set('data', {
      page: '',
      line: '',
      note: '',
      error: -1
    }),
    this.set('changeset', new Changeset(this.get('data')));
  },
  NoteValidations,
  errorTypes: Ember.inject.service(),
  showActions: Ember.inject.service(),
  open: false,

  actions: {
    addNote(char) {
      this.get('showActions').addNote(char,
                                      this.get('changeset.page'),
                                      this.get('changeset.line'),
                                      this.get('changeset.note'),
                                      this.get('changeset.error'));
      this.send('closeModal');
    },
    validstuff() {
      console.log(this.get('data'));
      console.log(this.get('changeset'));
    }
  }
});
