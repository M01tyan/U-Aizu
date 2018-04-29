// This is a JavaScript file
var prev = function() {
  var carousel = document.getElementById('carousel');
  carousel.prev();
};

var next = function() {
  var carousel = document.getElementById('carousel');
  carousel.next();
};

var viewbool = false;
function viewList(listNum){
  var displayList;
  switch(listNum){
    case 0:
      displayList = document.getElementById('hiddenListLiberal');
      break;
    case 1:
      displayList = document.getElementById('hiddenListEnglish');
      break;
    case 2:
      displayList = document.getElementById('hiddenListBase');
      break;
    case 3:
      displayList = document.getElementById('hiddenListExpert');
      break;
    case 4:
      displayList = document.getElementById('hiddenListExercise');
      break;
    case 5:
      displayList = document.getElementById('hiddenListTeacher');
      break;
    case 6:
      displayList = document.getElementById('hiddenListProject');
      break;
  }
  if(viewbool == false){
    displayList.style.display="block";
    viewbool = true;
  } else {
    displayList.style.display="none";
    viewbool = false;
  }
}