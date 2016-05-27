import Ember from 'ember';

export default Ember.Helper.extend({
  errorTypes: Ember.inject.service('error-types'),
  compute(params) {
    let err = params[0];
    return this.get('errorTypes.errors').objectAt(params[0]).capitalize();
  }
});
