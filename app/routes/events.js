import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  setupController(controller) {
    controller.set('menuItems', Ember.A([
        { route: 'events.index', name: 'All Events' },
        { route: 'events.create', name: 'Create New Event' },
        { route: 'events.edit', name: 'Edit Event' },
      ])
    )
  }
});
