import BaseValidator from 'ember-cp-validations/validators/base';
import Ember from 'ember';

export default BaseValidator.extend({
  validate(value, options, model, attribute) {
    if (value === '') {
      return true;
    } else if (model.line) {
      let line = new String(model.line);
      if (line.includes(value)) {
        return true;
      }
    }
    return false;
  }
});
