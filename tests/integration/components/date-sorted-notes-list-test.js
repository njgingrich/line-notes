import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('date-sorted-notes-list', 'Integration | Component | date sorted notes list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{date-sorted-notes-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#date-sorted-notes-list}}
      template block text
    {{/date-sorted-notes-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
