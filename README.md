# Line-notes

Line Notes (name in progress) is an application to let a stage manager or assistant stage manager easily create line notes for a theatre production.

## Background

Line notes are for an actor - a list of their mistakes is tallied with some description and sent to them after a rehearsal, allowing them to review anything they missed so they can have it fixed for the next rehearsal.

In the past, I have had to use Microsoft Word templates or Google Docs templates to create line notes, exporting them as PDFs every night after a rehearsal to send to each actor.

This application currently allows a user to create a show, actors, and notes for those actors. In future, it will have PDF exporting with automatic email delivery, and better user + data administration. Currently, the data exists in a realtime database through Firebase to allow concurrent edits of the notes.

## Screenshots

An overview of what a show looks like
![overview](https://github.com/njgingrich/line-notes/raw/master/public/assets/images/screenshots/show-detail.jpg)

## To Do list

- [ ] Add PDF exporting of an actor's notes
- [ ] Add relationships between an actor and a character
- [ ] Add automatic email delivery of notes
- [ ] Allow specific users access to a show
- [ ] Add an admin panel to administrate users
- [ ] Add support for theming
- [ ] Allow different user display options

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)
