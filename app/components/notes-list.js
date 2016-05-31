import Ember from 'ember';
import Table from 'ember-light-table';

export default Ember.Component.extend({
  table: null,
  store: Ember.inject.service(),

  columns: Ember.computed(function() {
    return[{
      label: 'Page',
      valuePath: 'page',
      width: '40px',
      sortable: true
    }, {
      label: 'Line',
      valuePath: 'line',
      width: '400px',
      sortable: false
    }, {
      label: 'Error',
      valuePath: 'error',
      width: '200px',
      sortable: true
    }, {
      label: 'Edit',
      width: '60px',
      sortable: false
    }, {
      label: 'Delete',
      width: '60px',
      sortable: false
    }];
  }),

  init() {
    this._super(...arguments);
    this.set('table', new Table(this.get('columns'), this.get('notes')));
    console.log("notes: ");
    console.log(this.get('notes'));
  },

  fetchRows() {
    console.log(this.get('char'));
    this.get('store').query('line-note', { filter: { character: this.get('char.name') }})
      .then(records => {
        console.log(records);
        this.table.addRows(records);
      }, function() {
        console.log('none found');
      });
  }
  /*init() {
    this._super(...arguments);
    this.sortedNotes = [];
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('sortedNotes', this.get('notes').sortBy('page'));
  },
  tagName: 'table'*/
});
