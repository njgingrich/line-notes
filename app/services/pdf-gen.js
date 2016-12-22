import Ember from 'ember';
import pdfMake from 'ember-pdfmake';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  doc: {
    pageOrientation: 'landscape',
    content: [
      {
        text: '',
        style: 'header'
      },
      {
        table: {
          widths: [25, '*', 55, 55, 55, 55, 55, 55],
          body: [
            [{text: 'Pg',                  style: 'tableHeader'},
             {text: 'Line',                style: 'tableHeader'},
             {text: 'Dropped',             style: 'tableHeader'},
             {text: 'Added',               style: 'tableHeader'},
             {text: 'Switched',            style: 'tableHeader'},
             {text: 'Wrong Word',          style: 'tableHeader'},
             {text: 'Called Line',         style: 'tableHeader'},
             {text: 'Check Complete Line', style: 'tableHeader'}
            ]
          ]
  			}
      }
    ],
    styles: {
      centered: {
        alignment: 'center'
      },
  		header: {
  			fontSize: 18,
  			bold: true,
  			margin: [0, 0, 0, 10]
  		},
  		tableHeader: {
  			bold: true,
  			fontSize: 13,
  			color: 'black'
  		}
    }
  },

  generatePdf(char, notes) {
    // generate header
    this.get('doc').content[0].text = char.get('name');

    // generate table
    let lines = [];
    let sortedNotes = notes.sortBy('page');
    sortedNotes.forEach(note => {
      let row = new Array(8);
      row[0] = note.get('page').toString();
      row[1] = note.get('line');
      for (let i = 2; i < 8; i++) {
        if (i == note.get('error')+2) {
          row[i] = {text: 'X', style: 'centered'};
        } else {
          row[i] = '';
        }
      }
      lines.push(row);
    });
    // save off base to reset after generation
    let body = JSON.parse(JSON.stringify(this.get('doc')));

    lines.forEach(line => {
      this.get('doc').content[1].table.body.push(line);
    })
    pdfMake.createPdf(this.get('doc')).open();
    this.set('doc', body);
  }

});
