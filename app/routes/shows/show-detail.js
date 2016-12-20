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
    console.log('using slug ' + params.show_slug);
    return this.store.query('show', {
      orderBy: 'slug',
      equalTo: params.show_slug
    }).then(data => {
      console.log('data: ' + data);
      console.log('data first: ' + data.get('firstObject'));
      return data.get('firstObject');
    });
  },

  serialize(show) {
    console.log('show: ' + show);
    return {
      show_slug: show.get('slug')
    };
  },

  afterModel(model) {
    if (model == undefined) { // invalid slug, redirect to base
      Ember.Logger.info("Attempted to reach unknown url, redirecting")
      this.transitionTo('shows.show-list');
    } else {
      let show = this.get('store').peekRecord('show', model.get('id'));
      show.get('characters').then(chars => {
        let sorted = chars.sortBy('name');
        let first = sorted.get('firstObject');
        this.transitionTo('shows.show-detail.char', first);
      });
    }
  }
});
