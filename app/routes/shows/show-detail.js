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
    console.log('clicked on ' + params.name);
    return this.store.query('show', {
      orderBy: 'friendlyName',
      equalTo: params.name
    }).then(data => {
      return data.get('firstObject');
    });
  },

  serialize(model) {
    return {
      name: model.get('friendlyName')
    };
  },

  afterModel(model, transition) {
    console.log('model: ' + model);
    this.transitionTo('shows.show-detail.char', model.get('characters').get('firstObject'));
  }
});
