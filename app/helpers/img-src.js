import Ember from 'ember';

export function imgSrc(params/*, hash*/) {
  let path = "assets/images/default.png";

  function getImageUrl(url) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let defaultPath = "assets/images/default.png";
      Ember.$.get(url)
        .done(() => {
        resolve(url);
      }).fail(() => {
        reject(defaultPath);
      });
    });
  }

  let imagePath = "assets/images/" + params[0].decamelize() + ".png";
  getImageUrl(imagePath).then((response) => {
    console.log('success: ' + response);
    path = response;
  }, (error) => {
    console.log('failed: ' + error);
    path = error;
  });
  return path;
}

export default Ember.Helper.helper(imgSrc);
