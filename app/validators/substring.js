/*import BaseValidator from 'ember-cp-validations/validators/base';

export default BaseValidator.extend({
  validate(value, options, model, attribute) {
    if (value === undefined || value === '') {
      return true;
    }
    if (model.line) {
      let line = String(model.line);
      if (line.includes(value)) {
        return true;
      }
    }
    return false;
  }
});*/
