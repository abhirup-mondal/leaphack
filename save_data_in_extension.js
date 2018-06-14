function saveChanges( words_searched, result_link_to_search) {
    assert (result_link_to_search);
    assert (words_searched);
    // Save it using the Chrome extension storage API.
    chrome.storage.sync.set({words_searched:result_link_to_search}, function() {
      // Notify that we saved.
      message('Settings saved');
    });
  }

  
  function extract_key_for_search ()
  {
    chrome.storage.sync.get([], function(total_saved_data) {
        compare_with_search_word(total_saved_data);
      });
  }