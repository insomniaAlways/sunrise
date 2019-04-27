import Ember from 'ember';
// import EmberUploader from "ember-u"
import FileField from 'ember-uploader/components/file-field';
import { inject as service } from '@ember/service';

export default FileField.extend({
  supportedExtensions: 'doc docx odt pdf rtf txt ps',
  firebaseApp: service(),
  // didReceiveAttrs() {
  //   this._super(...arguments);
  //   Ember.run.scheduleOnce('afterRender', this,  function() {
  //     if(this.get('target')) {
  //       Ember.$(this.get('target')).click( _.bind(function(){
  //         this.$().click();
  //       },this));
  //     }
  //     if(this.get('openSelector')) {
  //       this.$().click();
  //       this.toggleProperty('openSelector');
  //     }
  //   });
  // },

  filesDidChange: function(files) {
    let extension = files[0].name.split('.').pop();
    let firebase = this.get('firebaseApp')
    var storage = firebase.storage();
    var storageRef = storage.ref();
    // if(!_.includes(this.get('supportedExtensions').split(' '), _.lowerCase(extension))) {
    //   this.get('toast').error('File type not supported.', 'Error!');
    //   return false;
    // }

    // File or Blob named mountains.jpg
    var file = files[0]

    // Create the file metadata
    var metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed', // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused': // or 'paused'
            console.log('Upload is paused');
            break;
          case 'running': // or 'running'
            console.log('Upload is running');
            break;
        }
      }, function(error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          console.log(error)
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          console.log(error)
          // User canceled the upload
          break;
        case 'storage/unknown':
          console.log(error)
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
      });
    });

    this.set('file', files[0]);

    // Rest selected file
    this.$().val(null);
  },

  willDestroyElement() {
    this._super(...arguments);
    if(this.get('target')){
       Ember.$(this.get('target')).off('click');
    }
  },
});

