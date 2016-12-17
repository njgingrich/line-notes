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
      orderBy: 'friendlyName',
      equalTo: params.friendlyName
    }).then(data => {
      return new Promise(resolve => {
        resolve(data.get('firstObject'));
      });
    });
  },

  serialize(model) {
    return {
      name: model.get('friendlyName')
    };
  },

  /*afterModel(model, transition) {
    console.log('model: ' + model);
    this.transitionTo('shows.show-detail.char', model.get('characters').get('firstObject'));
  }*/

  /*setupController(controller, model) {
    this._super(controller, model);
    console.log('chars: ' + model.get('characters'));
    let chars = model.get('characters').then(function(chars) {
      console.log('newer chars: ' + chars);
      let charArray = chars.sortBy('name');
    })
    //controller.set('activeChar', charArray[0]);
  }*/
});
