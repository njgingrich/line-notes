import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('show', { name: params.name }).then((data) => {
      return data.get('firstObject');
    });
  }
});
