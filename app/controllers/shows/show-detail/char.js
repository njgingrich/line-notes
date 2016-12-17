import Ember from 'ember';

export default Ember.Controller.extend({
  char: Ember.computed.alias('model')
});
