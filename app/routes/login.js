import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  firebaseApp: service(),

  setupController(controller) {
    this._super(...arguments)
    controller.set('isLogin', true)
    controller.set('session', this.get('session'))
    controller.set('isLoading', false)
  },
  actions: {
    changeView(property) {
      this.controller.toggleProperty(property)
    },
  
    createAccount() {
      let { newIdentification, newPassword, username, confirmPassword, role } = 
      this.controller.getProperties('newIdentification', 'newPassword', 'username', 'confirmPassword', 'role')
      if(!newIdentification && !newPassword && !username && !confirmPassword) {
        return false
      }
      if(confirmPassword != newPassword) {
        return false
      }
      const auth = this.get('firebaseApp').auth();
      auth.createUserWithEmailAndPassword(newIdentification, newPassword).then((userResponse) => {
        const user = this.store.createRecord('user', {
          username: username,
          id: userResponse.uid,
          email: userResponse.email,
          role: role
        });
        return user.save();
      });
    },

    authenticate() {
      this.controller.set('isLoading', true)
      let { identification, password } = this.controller.getProperties('identification', 'password')
      this.get('session').authenticate('authenticator:oauth2', identification, password)
      .then(() => {
        this.controller.set('isLoading', false)
      })
      .catch((error) =>{
        this.get('toast').error('Error', error)
      })
    }
  }
});