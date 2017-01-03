import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      Ember.run.later(() => {
        this.transitionTo('shows.show-list');
      }, 3000);
    }
  },

  model(params) {
    return this.store.query('show', {
      orderBy: 'slug',
      equalTo: params.show_slug
    }).then(data => {
      return data.get('firstObject');
    });
  },

  serialize(show) {
    return {
      show_slug: show.get('slug')
    };
  },

  afterModel(model) {
    if (model == undefined) { // invalid slug, redirect to base
      Ember.Logger.info("Attempted to reach unknown url, redirecting");
      this.transitionTo('shows.show-list');
    } else {
      let show = this.get('store').peekRecord('show', model.get('id'));
      show.get('characters').then(chars => {
        let sorted = chars.sortBy('name');
        let first = sorted.get('firstObject');
        if (first == undefined) {
          this.transitionTo('shows.show-detail', show.get('slug'));
        } else {
          this.transitionTo('shows.show-detail.char', first);
        }
      });
    }
  }
});
