fetch('json-object-example.json')//fetch API with path or URL
.then(function (response) { //then function will run json data response
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("example2");// div ID
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
}                                   //loop for data in json file
                                    //append for each person on json file
                                    //div with full name 
                                    ///then append div to main container
}