import Component from '@ember/component';

export default Component.extend({
  activity: Ember.computed(function() {
    return this.get('store').findAll('activity')
  })
});
