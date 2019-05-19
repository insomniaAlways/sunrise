import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  setupController(controller, model) {
    this._super(...arguments)
    controller.set('model', model)
    controller.set('openModal', false)
    controller.set('selectedImage', null)
  },
  actions: {
    toggleModal(property, model) {
      this.controller.toggleProperty(property)
      if(this.controller.get(property)) {
        this.controller.set('selectedImage', model)
      } else {
        this.controller.set('selectedImage', null)
      }
    }
  }
});
