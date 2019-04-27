import Component from '@ember/component';
import {inject as service } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  firebase: service(),

  actions: {
    uploadImage() {
      // var storage = this.get('firebase').storage();
      // var storageRef = storage.ref();
      Ember.$('.file-upload').click()
    }
  }

});
