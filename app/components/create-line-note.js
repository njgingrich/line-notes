import Ember from 'ember';

export default Ember.Component.extend({
  page: '',
  line: '',
  note: '',
  error: '',

  actions: {
    addNote() {
      this.attrs.create(this.get('page'), this.get('line'), 
                        this.get('note'), this.get('error'));
      this.set('page', '');
      this.set('line', '');
      this.set('note', '');
      this.set('error', '');
    }
  }
});
