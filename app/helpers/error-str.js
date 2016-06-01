import Ember from 'ember';

export default Ember.Helper.extend({
  errorTypes: Ember.inject.service('error-types'),
  compute(params) {
    let err = params[0];
    console.log("capitalizing " + params[0]);
    let str = this.get('errorTypes.errors').objectAt(params[0]);
    if (str) {
      return this.get('errorTypes.errors').objectAt(params[0]).capitalize();
    } else {
      return '';
    }

  }
});
