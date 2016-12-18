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
    console.log('show: ' + show);
    return {
      show_slug: show.get('slug')
    };
  },

  afterModel(model, transition) {
    console.log('model: ' + model + ' of id ' + model.get('id'));
    let show = this.get('store').peekRecord('show', model.get('id'));
    show.get('characters').then(chars => {
      console.log('chars: ' + chars);
      let first = chars.get('firstObject');
      this.transitionTo('shows.show-detail.char', first);
    });
    /*model.get('characters').then(chars => {
      chars.get('firstObject').then(c => {
        this.transitionTo('shows.show-detail.char', c);
      })
    })*/
  }
});
