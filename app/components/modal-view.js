import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  classNames: ['ui large modal bg-transparent'],

  didUpdateAttrs() {
    this._super(...arguments);
    if(this.get('openModal')) {
      Ember.$('.ui.modal').modal('show')
    } else {
      Ember.$('.ui.modal').modal('hide')
    }
  },
  didInsertElement() {
    Ember.$('.ui.modal')
    .modal({
      onHidden: () => {
        this.set('openModal', false)
      }
    })
    .modal('hide')
  }
});
