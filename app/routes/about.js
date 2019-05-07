import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  setupController(controller) {
    controller.set('menuItems', Ember.A([
        { route: 'about.index', name: 'About Us', internalLinking: false},
        { route: 'about.from-principal', name: 'From the Principal', internalLinking: false},
        { route: 'about.mission-vision', name: 'Mission and Vision', internalLinking: false},
        { route: 'about.rules-regulation', name: 'Rules and Regulations', internalLinking: false}
      ])
    )
  }
});
