// BECAUSE THIS FILE IS FOR BROWSERS SO WE WILL USE VAR NOT CONST OR let

// The function that will make the request to the server from the client side

var todoContainer = document.querySelector('#todo-container');
//console.log(todoContainer);
function request () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () { // we define a callback and saying this is what we want to do
    if (xhr.readyState === 4 && xhr.status === 200) {
    	var result = JSON.parse(xhr.responseText);
      renderList(result) // to print the result in terminal
    }
  };
  xhr.open('GET', '/items', true); // to get the items from the url
  xhr.send();
}


// convert to html and display to use => render
request();

function renderList(todoArray){

	console.log(todoContainer);
	console.log(todoArray);
	var ul = document.createElement('ul');
	var li = document.createElement('li');
	var description = todoArray[0].description;
	console.log(description);
	 li.innerText = todoArray[0].description;
	// console.log(x);
	console.log(ul);
	console.log(li);
}