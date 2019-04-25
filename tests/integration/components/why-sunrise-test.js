import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('why-sunrise', 'Integration | Component | why sunrise', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{why-sunrise}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#why-sunrise}}
      template block text
    {{/why-sunrise}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
