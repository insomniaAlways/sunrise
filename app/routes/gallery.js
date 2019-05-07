import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model() {
    return this.get('store').findAll('image')
  },

  setupController(controller, model) {
    this._super(...arguments)
    controller.set('model', model)
    controller.set('menuItems', Ember.A([
        { route: 'gallery.index', name: 'Images', internalLinking: false},
        { route: 'gallery.manage-gallery', name: 'Manage Gallery', internalLinking: false}
      ])
    )
  }
});
