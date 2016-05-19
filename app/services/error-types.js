import Ember from 'ember';

export default Ember.Service.extend({
  errors: null,
  init() {
    this.set('errors', ['dropped', 'added', 'switched',
                        'wrong word', 'called line',
                        'check line', 'check complete line']);
    this._super(...arguments);
  }
});
