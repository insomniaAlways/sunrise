import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Route.extend({
  session: service(),
  model() {
    return this.get('store').findAll('image')
  },

  setupController(controller, model) {
    this._super(...arguments)
    controller.set('model', model)
    controller.set('session', this.get('session'))
    controller.set('menuItems', Ember.A([
        { route: 'gallery.index', name: 'Images', internalLinking: false},
        { route: 'gallery.manage-gallery', name: 'Manage Gallery', internalLinking: false}
      ])
    )
  }
});
