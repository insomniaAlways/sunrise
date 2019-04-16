import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  setupController(controller) {
    controller.set('menuItems', Ember.A([
        { route: 'about.index', name: 'About Us' },
        { route: 'about.from-principal', name: 'From the Principal' },
        { route: 'about.mission-vision', name: 'Mission and Vision' },
      ])
    )
  }
});
