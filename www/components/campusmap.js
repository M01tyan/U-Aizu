function TestLists() {
  var testList = document.getElementById('test-list');

  testList.delegate = {
    createItemContent: function(i) {
      return ons.createElement('<ons-list-item data="'+i+'" onclick="showIndex('+i+')" tappable>Item ' + i + '</ons-list-item>');
    },
    countItems: function() {
      return 10000;
    }
  };

  testList.refresh();
}

function showIndex(index){
  ons.notification.alert(index+'\n　がタップされました');
}