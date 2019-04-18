import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  router: Ember.inject.service(),

  isAdmissionRoute: Ember.computed('router.currentRouteName', function() {
    return this.get('router.currentRouteName') == 'admission.details'
  }),
});
