import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  router: Ember.inject.service(),

  hideNavBar: Ember.computed('router.currentRouteName', function() {
    return this.get('router.currentRouteName') == 'login'
  }),
});
