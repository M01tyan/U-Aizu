// This is a JavaScript file
var lectureLists = new Array("M1", "M2", "M3", "M4");
var exerciseLists = new Array("std1", "std2", "std3", "std4");
function editSelects(event) {
  console.log(event.target[0]);
  document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  switch (event.target.value) {
    case 'lecture':
      setUsedLists(lectureLists);
      break;
    case 'exercise':
      setUsedLists(exerciseLists);
      break;
    case 'experiment':
      setUsedLists(experimentLists);
      break;
    case 'conference':
      setUsedLists(conferenceLists);
      break;
    case 'seminar':
      setUsedLists(seminarLists);
      break;
    case 'other':
      setUsedLists(otherLists);
      break;
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
                                                '<div class="right">' +
                                                  '<ons-icon size="25px" icon="ion-information-circled" onclick="showTemplateDialog()"></ons-icon>' +
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

//部屋の詳細を表示
var showTemplateDialog = function() {
  var dialog = document.getElementById('my-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('roomDetail.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};