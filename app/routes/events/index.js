import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('event')
  },

  setupController(controller, model) {
    controller.set('model', model)
  }
});
