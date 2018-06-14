var saveButton = document.createElement("button");
var saveText = document.createTextNode("Save")
saveButton.appendChild(saveText);


// var removeButton = document.createElement("button");
// removeButton.innerHTML("remove");

var body = document.getElementsByClassName("rc");
for (var i = 0; i < body.length; ++i) {
    var childNode = saveButton.cloneNode(true);
    body[i].appendChild(childNode);
    console.log(body[i].childNodes[0].childNodes[0].getAttribute('href'));
}
