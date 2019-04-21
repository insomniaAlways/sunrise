import Route from '@ember/routing/route';
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  setupController(controller) {
    controller.set('menuItems', Ember.A([
        { route: 'events.index', name: 'All Events' },
        { route: 'events.create', name: 'Create New Event' },
        { route: 'events.edit', name: 'Edit Event' },
      ])
    )
  }
});
