// This is a JavaScript file
var lectureLists = new Array("M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10", "M11", "M12", "S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "Aud", "LTh");
var exerciseLists = new Array("CALL1", "CALL2", "iLab1", "iLab2", "NRLA", "NRLB", "std1", "std2", "std3", "std4", "std5", "std6");
var experimentLists = new Array("hdw1", "hdw2", "hdw3", "hdw4");
var conferenceLists = new Array("114", "128", "212", "中会議室", "小会議室", "大会議室", "F1会議室", "N-Lounge", "S-Lounge");
var seminarLists = new Array("sem06", "sem07", "sem08", "sem09", "sem10");
var otherLists = new Array("UBIC", "Geek Dojo", "グローバルラウンジ", "武道場", "体育館(半面1)", "体育館(半面2)", "プール", "運動場(フィールド側)", "運動場(芝生側)", "テニスコートA1", "テニスコートA2", "テニスコートB1", "テニスコートB2");

function editSelects(event) {
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
                                                  '<ons-icon size="25px" icon="ion-information-circled"></ons-icon>' +
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