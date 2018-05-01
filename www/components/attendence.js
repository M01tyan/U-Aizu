// This is a JavaScript file
var prev = function() {
  var carousel = document.getElementById('carousel');
  carousel.prev();
};

var next = function() {
  var carousel = document.getElementById('carousel');
  carousel.next();
};
var humanitiesLists = new Array("HS01 哲学", "HS03 心理学", "HS04 言語学");
var gymLists = new Array("PA01 体育実技１", "PA02 体育実技２", "PA03 体育実技３", "PA04 体育実技４");
function viewList(listNum){
  var viewbool;
  var displayList;
  switch(listNum){
    case 0:
      displayList = document.getElementById('hiddenListLiberal');
      viewbool = displayList.style.display;
      setSyllabusLists(humanitiesLists, 'humanities');
      setSyllabusLists(gymLists, 'gym');
      break;
    case 1:
      displayList = document.getElementById('hiddenListEnglish');
      viewbool = displayList.style.display;
      break;
    case 2:
      displayList = document.getElementById('hiddenListBase');
      viewbool = displayList.style.display;
      break;
    case 3:
      displayList = document.getElementById('hiddenListExpert');
      viewbool = displayList.style.display;
      break;
    case 4:
      displayList = document.getElementById('hiddenListExercise');
      viewbool = displayList.style.display;
      break;
    case 5:
      displayList = document.getElementById('hiddenListTeacher');
      viewbool = displayList.style.display;
      break;
    case 6:
      displayList = document.getElementById('hiddenListProject');
      viewbool = displayList.style.display;
      break;
  }
  if(viewbool == "none"){
    displayList.style.display="block";
  } else {
    displayList.style.display="none";
  }
}


function setSyllabusLists(lists, id){
  var list = document.getElementById(id); 
  if(list.length){
    for(i=0; i<lists.length; i++){
      var listItem = ons.createElement('<ons-list-item>' + lists[i] + '</ons-list-item>');
      list.appendChild(listItem);
    }
  }
}

document.addEventListener('show', function(event){
  if(event.target.id == "addCourse"){
    var hiddenLists = new Array({id: "hiddenListLiberal", num: 2}, {id: "hiddenListEnglish", num: 6}, {id: "hiddenListBase", num: 5}, {id: "hiddenListExpert", num: 5}, {id: "hiddenListExercise", num: 1}, {id: "hiddenListTeacher", num: 1}, {id: "hiddenListProject", num: 1});
    for(i=0; i<hiddenLists.length; i++){
      var syllabusList = document.getElementById(hiddenLists[i].id);
      for(j=0; j<hiddenLists[i].num; j++){
        console.log(syllabusList.getElementsByTagName('ons-list-header'));
      }
    }    
  }
});
