var contextMenuItem={
    "id":"specialBookmark",
    "title":"SpecialBookmark",
    "contexts":["all"]

};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickPosition){
    if(clickPosition.menuItemId=="specialBookmark" && clickPosition.selectionText)
    {
        
    }

})