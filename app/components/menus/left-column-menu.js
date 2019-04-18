import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    if(this.get('menuFor') == 'Admissions') {
      this.send('setActive', this.get('menuItems.firstObject'))
    }
  },

  actions: {
    setActive(item) {
      this.set('selectedContent', item.route)
    }
  }
});
