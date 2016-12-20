import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  page: [
    validator('presence', true),
    validator('number', {
      allowString: true,
      integer: true,
      gt: 0 })
  ],
  line: validator('presence', true),
  note: validator('substring'),
  error: [
    validator('presence', true),
    validator('number', {
      allowString: true,
      integer: true,
      gte: 0,
      lte: 6 })
  ]
});

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
  }
});
