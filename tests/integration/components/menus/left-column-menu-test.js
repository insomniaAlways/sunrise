import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('menus/left-column-menu', 'Integration | Component | menus/left column menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{menus/left-column-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#menus/left-column-menu}}
      template block text
    {{/menus/left-column-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
