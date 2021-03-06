import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default OAuth2PasswordGrant.extend({
  firebaseApp: service(),
  restore(data) {
    return Ember.RSVP.resolve(data);
  },

  authenticate(identification, password) {
    const auth = this.get('firebaseApp').auth();
    return auth.signInWithEmailAndPassword(identification, password)
    .then((data) => {
      return data.toJSON().stsTokenManager
    })
    .catch((error) => {
      console.log(error)
    });
  },

  invalidate() {
    return this._super(...arguments);
  }
});
