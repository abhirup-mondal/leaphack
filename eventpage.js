var contextMenuItem={
    "id":"specialBookmark",
    "title":"SpecialBookmark",
    "contexts":["all"]

};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickPosition, tab) {
    if(clickPosition.menuItemId=="specialBookmark") {
        if (gPos != null) {
            console.log('Position X: ' + gPos.clientX + '\nPosition Y: ' + gPos.clientY );

            testNodes = allElementsFromPoint(gPos.clientX, gPos.clientY);
        }
        var pos = document.querySelectorAll(":active");
        console.log(pos);
    }

})

function allElementsFromPoint(x, y) {
    var element, elements = [];
    var old_visibility = [];
    while (true) {
        element = document.elementFromPoint(x, y);
        if (!element || element === document.documentElement) {
            break;
        }
        elements.push(element);
        old_visibility.push(element.style.visibility);
        element.style.visibility = 'hidden';
    }
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.visibility = old_visibility[k];
    }
    elements.reverse();
    return elements;
}

var gPos = null;

//receiving message
chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.from == 'mouseup') {
        //storing position
        gPos = msg.point;
        console.log(gPos);
    }
})
