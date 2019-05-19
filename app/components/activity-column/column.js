import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  store: Ember.inject.service(),
  model: Ember.A([]),

  events: Ember.computed(function() {
    return this.get('store').findAll('event')
  })
});
