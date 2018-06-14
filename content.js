/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */

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
    LinkHeading = body[i].childNodes[0].childNodes[0].innerText;
    console.log(body[i].childNodes[0].childNodes[0].innerText)
    raw_tag_string = ""
    try{
        raw_tag_string = body[i].childNodes[1].childNodes[0].childNodes[1].innerText;
    }catch(e){
    }
    childNode.setAttribute('id', hyperlink);
    childNode.setAttribute('tag_data_raw', raw_tag_string);
    childNode.setAttribute('title', LinkHeading);
    body[i].appendChild(childNode);
    
    //console.log(hyperlink);
    //console.log(body[i].childNodes[1].childNodes[0].childNodes[1].innerText);
}

function saveBtnHandler(e) {
    var searchString = document.getElementById('lst-ib').getAttribute('value');
    chrome.storage.local.get('val', function(d) {
        var currentData = d.val;
        console.log(currentData);
        
        //var tag_list = getTagsAPI(searchString + ' ' + e.target.getAttribute('tag_data_raw'));
        getTagsAPI2(searchString + ' ' + e.target.getAttribute('tag_data_raw'), e.target.getAttribute('id'), e.target.getAttribute('title'));

        //console.log(tag_list);
        // for (var i=0; i<tag_list.length; i++) {
        //     if (!(tag_list[i] in currentData)) {
        //         currentData[tag_list[i]] = [e.target.getAttribute('id')];
        //     }
        //     else {
        //         currentData[tag_list[i]].push(e.target.getAttribute('id'));
        //     } 
        // }

        // if (!(searchString in currentData)) {
        //     currentData[searchString] = [e.target.getAttribute('id')];
        // }
        // else {
        //     currentData[searchString].push(e.target.getAttribute('id'));
        // }
        // console.log('final');
        // console.log(currentData);

        // chrome.storage.local.set({'val': currentData});
    });

    // chrome.storage.local.set({'val': {}});
}

function getTagsAPI(metadata) {
    // var tag_list = ["test", "strings"];
     

    body = {
        "documents": [
        {
            "id": "1",
            "text": metadata
            
        }
        ]
    }

    let config = {
        headers: {
            "Ocp-Apim-Subscription-Key": "48d8b1f950314975925d36a8554d4172",
        }
    }
    
    promis = axios.post('https://eastasia.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases',body,config)
        .then(function(resp){ return resp.data.documents[0].keyPhrases })
        .catch( function(err){console.log(err)});
    promis.then(function(res) { return res});
}

function getTagsAPI2(metadata, hyperlink, linkTitle) {
    console.log("Printing metadata "+ metadata);
    var msg = {
        from: 'content',
        data: metadata,
        link: hyperlink,
        title : linkTitle
    }
    chrome.runtime.sendMessage(msg, function(response) {
        console.log(response);
        console.log("ok got ting from background");
    });
}

var searchString = document.getElementById('lst-ib').getAttribute('value');
chrome.storage.local.set({
    'sstring': searchString
});

