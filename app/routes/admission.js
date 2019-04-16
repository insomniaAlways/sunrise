import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  setupController(controller) {
    controller.set('menuItems', Ember.A([
        { route: '#documents', name: 'Documents' },
        { route: '#timing', name: 'Session and School Timing' },
        { route: '#passPercentage', name: 'Pass Percentage' },
        { route: '#curricularActivities', name: 'Co Curricular Activities' },
        { route: '#examinations', name: 'Tests and Examinations' },
        { route: '#parentsTeacherMeet', name : 'Parents /Teacher Meet'},
        { route: '#annualDay', name: 'Annual day'}
      ])
    )
  }
});
