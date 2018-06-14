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
    console.log(hyperlink);
}

function saveBtnHandler(e) {
    var searchString = document.getElementById('lst-ib').getAttribute('value');
    chrome.storage.local.get('val', function(d) {
        var currentData = d.val;
        console.log(currentData);
        if (!(searchString in currentData)) {
            currentData[searchString] = [e.target.getAttribute('id')];
        }
        else {
            currentData[searchString].push(e.target.getAttribute('id'));
        }
        console.log('final');
        console.log(currentData);

        chrome.storage.local.set({'val': currentData});
    });
}

var searchString = document.getElementById('lst-ib').getAttribute('value');
chrome.storage.local.set({
    'sstring': searchString
});
