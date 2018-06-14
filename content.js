var saveButton = document.createElement('button');
var saveText = document.createTextNode('Save');
saveButton.appendChild(saveText);

saveButton.setAttribute('class', 'saveButton');

// var removeButton = document.createElement("button");
// removeButton.innerHTML("remove");

googleNodeClass = 'rc';
var body = document.getElementsByClassName(googleNodeClass);

for (var i = 0; i < body.length; ++i) {
    var childNode = saveButton.cloneNode(true);
    childNode.addEventListener('click', saveBtnHandler);
    hyperlink = body[i].childNodes[0].childNodes[0].getAttribute('href');
    childNode.setAttribute('id', hyperlink);
    body[i].appendChild(childNode);
}

function saveBtnHandler(e) {
    console.log(e.target.getAttribute('id'));
}
