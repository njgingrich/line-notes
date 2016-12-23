import {
    validatePresence,
    validateLength,
    validateConfirmation,
    validateFormat
} from 'ember-changeset-validations/validators';
import validateSubstring from '../validators/substring';

export default {
  line: validatePresence(true),
  page: validateNumber({ positive: true }),
  note: validateSubstring({s: line});
  error: [
    validateInclusion({ range: [0, 5]})
  ]
}
