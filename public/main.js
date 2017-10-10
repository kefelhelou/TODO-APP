// This is the frontend file
// BECAUSE THIS FILE IS FOR BROWSERS SO WE WILL USE VAR NOT CONST OR let
// In javascript it will send any function to the top so i can defined functions any where
// but if we defined the function like var function it will keep it in it's place
// JSON is a format for sending data before it we have xml
// if we are using data and sending it in request we have first fo stringfy it "convert from object to string"
// appendChild will add the item to the end of the element in document

// this variable will define the list from html
var listContainer = document.querySelector('#list-container'); // querySelector to use the id and class as in css
// The function that will make the request to the server from the client side
function request () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () { // <= this is a callback -- we define a callback and saying this is what we want to do
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText); // to convert data into defined syntax
      renderList(result);
    }
  };
  xhr.open('GET', '/items', true); // to get the items from the url
  xhr.send();
}

request();

// The function that will generate the list
function renderList (todos/* In side the function i will use this name */) { // converting result and result to html + display to user means render
  var ul = document.createElement('ul'); // create html element but not displayed in the page
  // var li = document.createElement('li'); we used it before using forEach
  // console.log(ul);
  // console.log(li);
  // console.log(todos);
// I need to repeat this part
  // var desc = todos[0].describtion; // define the first item of our object
  // console.log(desc);
  // li.innerText = todos[0].describtion; // put the item into the list
  // ul.appendChild(li);
  // console.log(ul);
  // listContainer.appendChild(ul);
  todos.forEach(function (todo) {
    var li = document.createElement('li');
    li.innerText = todo.describtion;
    ul.appendChild(li);
  });
  listContainer.appendChild(ul);
  // console.log(todoArray); // to print the result in terminal
}

// Practice on forEach , map and filter
