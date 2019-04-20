import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments)
    controller.set('isLogin', false)
  },
  actions: {
    changeView(property) {
      this.controller.toggleProperty(property)
    }
  }
});
