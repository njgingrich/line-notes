import Ember from 'ember';

export default Ember.Controller.extend({
  char: Ember.computed.alias('model'),
  showActions: Ember.inject.service(),
  notify: Ember.inject.service(),
  pdfGen: Ember.inject.service(),
  isEditing: false,
  //docDefinition: { content: 'This is an sample PDF printed with pdfMake' },
  pdfContent: Ember.computed('char.notes.@each.line', function() {
    let data = {};
    let lines = {
      table: {
        widths: [30, '*', 50, 50, 50, 50, 50, 50]
			}};
    let tableBody = [
      ['Pg', 'Line', 'Dropped', 'Added', 'Switched', 'Wrong Word', 'Called Line', 'Check Complete Line']
    ];
    let tableRows = [ '7',
      { text: 'nothing interesting here', italics: true, color: 'gray' },
      { text: 'nothing interesting here', italics: true, color: 'gray' },
      { text: 'nothing interesting here', italics: true, color: 'gray' },
      { text: 'nothing interesting here', italics: true, color: 'gray' },
      { text: 'nothing interesting here', italics: true, color: 'gray' },
      { text: 'nothing interesting here', italics: true, color: 'gray' },
      { text: 'nothing interesting here', italics: true, color: 'gray' }];

    this.get('char').get('notes').then(notes => {
      let rows = [];
      notes.forEach(note => {
        console.log('line: ' + note.get('line'));
        rows.push(note.get('line'));
      });

      console.log('rows: ' + rows);
    });

    tableBody.push(tableRows);
    lines.table.body = tableBody;
    data.content = lines;
    data.pageOrientation = 'landscape';
    console.log(data);
    return data;
  }),

  actions: {
    editNote(note) {
      this.get('showActions').editNote(note);
    },
    deleteNote(char, note) {
      this.get('showActions').deleteNote(char, note);
      this.get('notify').alert('Note deleted!');
    },
    deleteAllNotes(char) {
      this.get('showActions').deleteAllNotes(char);
    },
    deleteChar(char) {
      char.get('show').then((show) => {
        this.get('showActions').deleteChar(char, show);
        this.send('closeModal');
        this.get('notify').alert('Character deleted!');
        this.transitionToRoute('shows.show-detail', show.get('slug'));
      });
    },
    editChar(char) {
      this.toggleProperty('isEditing');
      if (!this.get('isEditing')) {
        this.get('showActions').editChar(char);
      }
    },
    printNotes(char) {
      char.get('notes').then(notes => {
        this.get('pdfGen').generatePdf(char, notes);
      });
    }
  }
});
