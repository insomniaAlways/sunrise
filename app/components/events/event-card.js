import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  event: Ember.computed(function() {
    return this.get('row') ? this.get('row.content') : this.get('event')
  }),

  ellipsis: Ember.computed(function() {
    return this.get('column') ? this.get('column.ellipsis') : this.get('ellipsis')
  })
});
