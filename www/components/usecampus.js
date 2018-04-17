// This is a JavaScript file
var appKey = "41ee8f45a609ae3f379a2a73f9c1990b329b41ed299bf0294266f4704a23a447";
var clientKey = "e9d5a5fa0057afa0aa4b0eb0bbd0787c4849fffb165647ba122bbbc2e659930b";
var ncmb = new NCMB(appKey, clientKey);
var roomlist;

function editSelects(event) {
  var RoomDB = ncmb.DataStore("RoomDB");
  var searchType;
  document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  switch (event.target.value) {
    case 'lecture':
      searchType = "講義室";
    break;
    case 'exercise':
       searchType = "演習室";
    break;
    case 'experiment':
       searchType = "実験室";
    break;
    case 'conference':
       searchType = "会議室";
    break;
    case 'seminar':
       searchType = "ゼミ室";
    break;
    case 'other':
       searchType = "その他";
    break;
  }
  RoomDB.equalTo("type", searchType)
                   .order("orderid", false)
                   .fetchAll()
                   .then(function(results){
                     roomlist = results;
                     setUsedLists(results);
                   })
                   .catch(function(error){
                      alert("error!");
                   });
}

function setUsedLists(lists) {
  var list = document.getElementById('infinite-list'); 
    list.delegate = {
      createItemContent: function(index) {
        // 配列を作成
        return ons.createElement('<ons-list-item class="room-list">' +
                                                '<div class="left">' +
                                                  '<img class="list-item__thumbnail" src="https://placekitten.com/g/60/60">' +
                                                '</div>' +
                                                '<div class="center">' +
                                                  '<span class="list-item__title">' + lists[index].roomname + '</span><span class="list-item__subtitle">On the Internet</span>' +
                                                '</div>' +
                                                '<div class="right">' +
                                                  '<ons-icon data="'+index+'" size="25px" icon="ion-information-circled" onclick="showTemplateDialog('+index+')"></ons-icon>' +
                                                '</div>' +
                                              '</ons-list-item>');
      },
    
      countItems: function() {
        // 配列の長さ
        return lists.length;
      }
    };
   list.refresh();
}

//部屋の詳細を表示
function showTemplateDialog(index) {
  //dialogのidを取得
  var dialog = document.getElementById('my-dialog');
  var roomid = document.getElementById('roomid');
  var place = document.getElementById('place');
  var roomtime = document.getElementById('roomtime');
  if (dialog) {
    //dialogが存在すればroomid, place, open, closeを書き換え後show
    roomid.innerHTML = roomlist[index].roomid;
    place.innerHTML = roomlist[index].place;
    roomtime.innerHTML = roomlist[index].open + " ~ " + roomlist[index].close;
    dialog.show();
  } else {
    //dialogが存在しなければroomDetail.htmlのdialogを作成
    ons.createElement('roomDetail.html', { append: true })
      .then(function(dialog) {
        var roomid = document.getElementById('roomid');
        var place = document.getElementById('place');
        var roomtime = document.getElementById('roomtime');
        roomid.innerHTML = roomlist[index].roomid;
        place.innerHTML = roomlist[index].place;
        roomtime.innerHTML = roomlist[index].open + " ~ " + roomlist[index].close;
        dialog.show();
      });
  }
}

function hideDialog(id) {
  //dialogを閉じる
  document.getElementById(id).hide();
}


document.addEventListener('deviceready',function(){
   //ref = window.open('https://csweb.u-aizu.ac.jp/campusweb/campusportal.do?page=main', '_blank', 'toolbar=yes,location=no,toolbarposition=buttom,enableViewportScale=yes');
  //Ajax通信
  $.ajax({
    type: 'GET',
    url: 'https://csweb.u-aizu.ac.jp/campusweb/campussquare.do?_flowId=KHW0001300-flow',
    datatype: 'html',
    success: function(data){
      console.log(data);
    },
    error: function(error){
      console.log(error);
    }
  });
},false);
