import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gallery/gallery-view', 'Integration | Component | gallery/gallery view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gallery/gallery-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#gallery/gallery-view}}
      template block text
    {{/gallery/gallery-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
