import Component from '@ember/component';
import Ember from 'ember';
import moment from 'moment';

export default Component.extend({
  store: Ember.inject.service(),
  init() {
    this._super(...arguments)
    this._initProperty()
  },
  _initProperty() {
    this.setProperties({
      name: null,
      type: null,
      date: moment().toDate(),
      description: null
    })
  },
  actions: {
    save() {
      return this.get('store').createRecord('event', {
        name: this.get('name'),
        type: this.get('type'),
        date: this.get('date'),
        description: this.get('description')
      }).save().then(() => this._initProperty())
    }
  }
});
