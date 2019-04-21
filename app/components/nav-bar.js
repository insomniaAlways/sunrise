import Component from '@ember/component';
import Ember from 'ember';
import { inject as service } from "@ember/service";

export default Component.extend({
  router: service(),
  session: service(),

  isAdmissionRoute: Ember.computed('router.currentRouteName', function() {
    return this.get('router.currentRouteName') == 'admission.details'
  }),
  actions: {
    invalidateSession() {
      this.get('session').invalidate().then(() => window.location.replace('localhost:4200/home'));
    },
    toggleMenu() {
      Ember.$('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    }
  }
});
