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

export default Ember.Component.extend(Validations, {
  init() {
    let page = '';
    let line = '';
    let note = '';
    let error = -1;
    this._super(...arguments);
  },
  errorTypes: Ember.inject.service(),
  open: false,

  actions: {
    addNote() {
      this.attrs.create(this.get('page'), this.get('line'),
                        this.get('note'), this.get('error'));
      this.set('page', '');
      this.set('line', '');
      this.set('note', '');
      this.set('error', -1);
      this.attrs.close();
    }
  }
});
