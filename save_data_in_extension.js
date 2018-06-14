function saveChanges( words_tags , result_link_to_search) {
    if (!result_link_to_search)
    {
      message('Error: No result link specified');
          return;
    }
    else if(!words_tags)
    {
      message('Error: No tags specified');
      return;
    }
    else{
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({words_tags:result_link_to_search}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
  }
  }

  
  function extract_key_for_search (key)
  {
    chrome.storage.sync.get(key, function(result_suggestion) {
        alert(result_suggestion)
      });
  }

  