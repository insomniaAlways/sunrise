import Route from '@ember/routing/route';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  setupController(controller) {
    controller.set('menuItems', Ember.A([
        { route: 'about.index', name: 'About Us', internalLinking: false},
        { route: 'about.from-principal', name: 'From the Principal', internalLinking: false},
        { route: 'about.mission-vision', name: 'Mission and Vision', internalLinking: false}
      ])
    )
  }
});
