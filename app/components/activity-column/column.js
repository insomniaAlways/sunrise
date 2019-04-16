import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  store: Ember.inject.service(),

  events: Ember.computed(function() {
    return this.get('store').findAll('event')
  })
});
