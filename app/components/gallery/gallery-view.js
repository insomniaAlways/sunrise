import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleModal(property, model) {
      this.sendAction('toggleModal', property, model)
    }
  }
});
