// BECAUSE THIS FILE IS FOR BROWSERS SO WE WILL USE VAR NOT CONST OR let

// The function that will make the request to the server from the client side
function request () {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () { // we define a callback and saying this is what we want to do
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText); // to print the result in terminal
    }
  };
  xhr.open('GET', '/items', true); // to get the items from the url
  xhr.send();
}

request();
