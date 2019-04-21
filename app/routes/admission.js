import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  setupController(controller) {
    controller.set('menuItems', Ember.A([
        { route: '#documents', name: 'Documents', internalLinking: true},
        { route: '#timing', name: 'Session and School Timing', internalLinking: true},
        { route: '#passPercentage', name: 'Pass Percentage', internalLinking: true},
        { route: '#curricularActivities', name: 'Co Curricular Activities', internalLinking: true},
        { route: '#examinations', name: 'Tests and Examinations', internalLinking: true},
        { route: '#parentsTeacherMeet', name : 'Parents /Teacher Meet', internalLinking: true},
        { route: '#annualDay', name: 'Annual day', internalLinking: true},
        { route: 'fee-structure', name: 'Fee Structure', internalLinking: false}
      ])
    )
  }
});
