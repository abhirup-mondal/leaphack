var doc = document.getElementById('test-list');

chrome.storage.local.get('val', function (items) {
    if(!items)
    {
        console.log("No list received");
          
    }
    searchString = undefined;
    chrome.storage.local.get('sstring', function(str) {
        if(!str)
        {
            console.log("No value received");
        }
        console.log(str);
        searchString = str.sstring;
        console.log(searchString);

        var searchStringTokens = searchString.split(' ');
        console.log(searchStringTokens);

        currentBookmarkList = [];

        for (key in items.val) {
            console.log(key);
            if (key === searchString || searchStringTokens.includes(key)) {
                for (var i = 0; i < items.val[key].length; ++i) {
                    var linkInfo = items.val[key][i];
                    var link = linkInfo[0];
                    var title = linkInfo[1];
                    console.log(title);
                    console.log(link);
                    if (!(currentBookmarkList.includes(linkInfo))) {
                        currentBookmarkList.push(linkInfo);
                    }
                }
            }
        }

        for (var i = 0; i < currentBookmarkList.length; ++i) {
            linkInfo = currentBookmarkList[i];

            var li = document.createElement('li');
            var a = document.createElement('a');
            a.setAttribute('href', linkInfo[0]);
            // a.setAttribute('title', 'abc');
            var t = document.createTextNode(linkInfo[1]);
            a.appendChild(t);
            li.appendChild(a);

            document.getElementById('test-list').appendChild(li);
        }
    })
});
