import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('show', { name: params.name }).then((data) => {
      console.log(data.get('firstObject'));
      return data.get('firstObject');
    });
  }
});
