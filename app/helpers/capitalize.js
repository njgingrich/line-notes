import Ember from 'ember';

export function capitalize(params) {
  return params[0].capitalize();
}

export default Ember.Helper.helper(capitalize);
