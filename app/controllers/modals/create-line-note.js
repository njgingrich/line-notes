import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    this.set('page', '');
    this.set('line', '');
    this.set('note', '');
    this.set('error', -1);
  },
  page: '',
  line: '',
  note: '',
  error: -1,
  errorTypes: Ember.inject.service(),
  showActions: Ember.inject.service(),
  open: false,

  actions: {
    addNote(model) {
      this.get('showActions').addNote(model, this.get('page'),
                                      this.get('line'), this.get('note'),
                                      this.get('error'));
      this.send('closeModal');
    },
    validstuff() {
      console.log(model);
    }
  }
});
