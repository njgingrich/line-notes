import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      Ember.run.later(() => {
        this.transitionTo('shows.show-list');
      }, 2000);
    }
  },

  model(params) {
    return this.store.query('character', {
      orderBy: 'slug',
      equalTo: params.char_slug
    }).then(data => {
      return data.get('firstObject');
    });
  },

  afterModel(model) {
    if (model == undefined) { // invalid slug, redirect to base
      Ember.Logger.info("Attempted to reach unknown url, redirecting to root")
      this.transitionTo('shows.show-list');
    }
  },

  serialize(char) {
    return {
      char_slug: char.get('slug')
    };
  }
});
