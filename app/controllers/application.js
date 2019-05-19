import Controller from '@ember/controller';
import Ember from 'ember';
import ENV from "./../config/environment"

export default Controller.extend({
  isDevelopment: ENV.isDevelopment,
  router: Ember.inject.service(),
  session: Ember.inject.service('session'),

  hideNavBar: Ember.computed('router.currentRouteName', function() {
    return this.get('router.currentRouteName') == 'login'
  }),
});
