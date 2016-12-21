import Ember from 'ember';

export default Ember.Controller.extend({
  showActions: Ember.inject.service('show-actions'),
  isShowingUserSearch: false,
  fields: ['title'],
  apiSettings: {
    onResponse: function(response) {
      let newResults = Ember.A();
      response.results.forEach((r) => {
        console.log(r);
        newResults.pushObject(Ember.Object.create({title: r.name}));
      })
      console.log('returning ' + newResults);
      newResults.forEach(d => {
        console.log(d);
      })
      return newResults;
    }
  },
  usernames: Ember.A(),
  userList: [
    {title: 'Nathan'},
    {title: 'Nils'},
    {title: 'Aaron'}
  ],

  actions: {
    addAssignedUser(name) {
      this.get('usernames').pushObject(name);
      console.log('usernames: ' + this.get('usernames'));
    },
    editShow(show) {
      this.get('showActions').editShow(show);
      this.send('closeModal');
    },
    openUserSearch() {
      this.toggleProperty('isShowingUserSearch');
    },
    fileLoaded(file) {
      console.log(file.name, file.type, file.data, file.size);
    }
  }
});
