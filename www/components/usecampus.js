// This is a JavaScript file
var materiallists = new Array(5);
var underbarlists = new Array(6);
materiallists[0] = "M1";
materiallists[1] = "M2";
materiallists[2] = "M3";
materiallists[3] = "M4";
materiallists[4] = "M5";
underbarlists[0] = "M6";
underbarlists[1] = "M7";
underbarlists[2] = "M8";
underbarlists[3] = "M9";
underbarlists[4] = "M10";
underbarlists[5] = "M11";

function editSelects(event) {
  if (event.target.value == 'material') {
    document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
    setUsedLists(materiallists);
  } else if (event.target.value == 'underbar') {
    setUsedLists(underbarlists);

  }
}

function setUsedLists(lists) {
   var list = document.getElementById('infinite-list');    
    list.delegate = {
      createItemContent: function(index) {
        // Return a DOM element here.
        return ons.createElement('<ons-list-item>' +
                                                '<div class="left">' +
                                                  '<img class="list-item__thumbnail" src="https://placekitten.com/g/60/60">' +
                                                '</div>' +
                                                '<div class="center">' +
                                                  '<span class="list-item__title">' + lists[index] + '</span><span class="list-item__subtitle">On the Internet</span>' +
                                                '</div>' +
                                              '</ons-list-item>');
      },
    
      countItems: function() {
        // Return the number of items here.
        return lists.length;
      }
    };
   list.refresh();
}