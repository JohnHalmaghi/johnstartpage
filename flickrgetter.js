var requestURL = 'https://api.flickr.com/services/rest/?&method=flickr.galleries.getPhotos&gallery_id=72157679773554794&api_key=0c5d918b8ac84cb5c74f0785d71232ec&user_id=149876655@N08&format=json&per_page=50'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var images = request.response;
  var json = JSON.parse(images);
  getImage(images);
}

function getImage(jsonObj){
	var images = jsonObj['photo'];
}