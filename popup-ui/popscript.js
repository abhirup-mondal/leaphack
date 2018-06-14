var doc = document.getElementById('test-list');

chrome.storage.local.get('val', function (items) {
    if(!val)
    {
        console.log("No list received");
            break;
    }
    searchString = undefined;
    chrome.storage.local.get('sstring', function(str) {
        if(!sstring)
        {
            console.log("No value received");
            break;
        }
        console.log(str);
        searchString = str.sstring;
        console.log(searchString);

        for (key in items.val) {
            if (key === searchString) {
                for (var i = 0; i < items.val[key].length; ++i) {
                    var link = items.val[key][i];


                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.setAttribute('href', link);
                    var t = document.createTextNode(link);
                    a.appendChild(t);
                    li.appendChild(a);

                    document.getElementById('test-list').appendChild(li);
                }
            }
        }
    })
});
