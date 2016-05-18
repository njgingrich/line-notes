import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:substring', 'Unit | Validator | substring', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
