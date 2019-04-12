import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.send('setActive', this.get('menuItems.firstObject'))
  },

  actions: {
    setActive(item) {
      this.set('selectedContent', item.route)
    }
  }
});
