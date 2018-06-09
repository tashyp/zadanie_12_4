// First server request

// XMLHttpRequest object
/*
var request = new XMLHttpRequest();  // first step
request.open('GET', 'http://apis.is/concerts');  // second step
request.send();  // third step

// Sync
var request = new XMLHttpRequest();
request.open('GET', 'http://apis.is/concerts', false); // async flag set to false
request.send(); // interface suspension
if(request.status == 200) {
	console.log(request.response);
}

// Async
var request = new XMLHttpRequest();
request.open('GET', 'http://apis.is/concerts'); // just like it's been until now
request.onload(function() {
	if (request.status == 200) {
		console.log(request.response);
	}
});
request.send();

*/

var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');
button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response); // JavaScript Object Notation zamieniania wartości tekstowej w formacie JSON na zrozumiały dla JS obiekt, którym można manipulować
    paragraph.innerHTML = response.value.joke; //put joke to the paragraph
  });
  xhr.send();
}

window.addEventListener("load", getJoke); //joke shows without putting button