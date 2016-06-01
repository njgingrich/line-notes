import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('shows', {path: '/'}, function() {
    this.route('show-list', {path: '/list'});
    this.route('show-detail', {path: '/:name'});
  });
});

export default Router;
