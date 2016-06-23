import Ember from 'ember';

export default Ember.Controller.extend({
  sideBarOpen: false,

  actions: {
    toggleSideBar() {
      this.toggleProperty('sideBarOpen');
    }
  }
});
