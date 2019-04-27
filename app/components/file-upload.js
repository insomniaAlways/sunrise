import Ember from 'ember';
import FileField from 'ember-uploader/components/file-field';
import { inject as service } from '@ember/service';

export default FileField.extend({
  supportedExtensions: 'doc docx odt pdf rtf txt ps',
  firebaseApp: service(),
  store: service(),

  filesDidChange: function(files) {
    let that = this
    var file = files[0]
    // let extension = files[0].name.split('.').pop();
    let firebase = this.get('firebaseApp')
    var storage = firebase.storage();
    var storageRef = storage.ref();

    var metadata = {
      contentType: 'image/jpeg'
    };

    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    uploadTask.on('state_changed', (snapshot) => that.progressStatus(snapshot), (error) => that.catchError(error),
     () => uploadTask.snapshot.ref.getDownloadURL().then((url) => that.save(uploadTask.snapshot.ref, url)))

    this.set('file', files[0]);
    // Rest selected file
    this.$().val(null);
  },

  catchError(error) {
    switch (error.code) {
      case 'storage/unauthorized': {
        return this.get('toast').error(error.code);
      }
      case 'storage/canceled': {
        return this.get('toast').error(error.code);
      }
      case 'storage/unknown': {
        return this.get('toast').error(error.code);
      }
    }
  },

  progressStatus(snapshot) {
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    this.set('progress', progress)
    switch (snapshot.state) {
      case 'paused':
        return this.set('status', snapshot.state)
      case 'running':
        return this.set('status', snapshot.state)
    }
  },

  save(data, url) {
    this.get('store').createRecord('image', {
      bucket: data.bucket,
      fullPath: data.fullPath,
      name: data.name,
      url: url
    }).save()
  },

  willDestroyElement() {
    this._super(...arguments);
    if(this.get('target')){
       Ember.$(this.get('target')).off('click');
    }
  },
});

