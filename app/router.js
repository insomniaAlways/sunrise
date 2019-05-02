import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('about', function() {
    this.route('awards-affiliations');
    this.route('from-principal');
    this.route('mission-vision');
    this.route('rules-regulation');
  });
  this.route('admission', function() {
    this.route('details');
  });

  this.route('campus-life', function() {
    this.route('hostels');
  });
  this.route('fee-structure');
  this.route('events', function() {
    this.route('edit');
    this.route('create');
  });
  this.route('contact');
  this.route('gallery', function() {
    this.route('manage-gallery');
  });
  this.route('why-sunrise');
});

export default Router;
