// BECAUSE THIS FILE IS FOR BROWSERS SO WE WILL USE VAR NOT CONST OR let

// The function that will make the request to the server from the client side
// 
// 
// JSON.stringfy() => from obj to string
// JSON.parse() => from string to obj
// 
// ex:
// a = {name : 'moath'} => obj
// b = "{\"name\":\"moath\"}" => string
// then => a.name = 'moath' and b.name = undefined

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
	// var li = document.createElement('li');

	todoArray.forEach(function (element) {
		var div = document.createElement('div');
		div.classList.add('text');
		var p = document.createElement('p');
		div.appendChild(p);
		var li = document.createElement('li');
		li.appendChild(div);
		var div1 = document.createElement('div');
		div1.classList.add('btn');
		li.appendChild(div1);
		
		

		console.log(element);
		p.innerText = element.description;
		ul.appendChild(li);

	})

	// console.log(description);
	 // ul.appendChild(li);
	 todoContainer.appendChild(ul);
	// console.log(x);
	// console.log(ul);
	// console.log(li);
}



// the methods for array is : forEach , map , filter
			 // li.innerText = description;