import {
    validatePresence,
    validateNumber,
    validateInclusion,
} from 'ember-changeset-validations/validators';
import validateSubstring from '../validators/substring';

export default {
  line: validatePresence(true),
  page: validateNumber({ positive: true }),
  note: validateSubstring({longString: 'line'}),
  error: [
    validateInclusion({ range: [0, 5]})
  ]
};
