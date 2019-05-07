import Route from '@ember/routing/route';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  setupController(controller) {
    controller.set('session', this.get('session'))
    controller.set('menuItems', Ember.A([
        { route: 'events.index', name: 'All Events' },
        { route: 'events.create', name: 'Create New Event' },
        { route: 'events.edit', name: 'Edit Event' },
      ])
    )
  }
});
