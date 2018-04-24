// This is a JavaScript file
var appKey = "41ee8f45a609ae3f379a2a73f9c1990b329b41ed299bf0294266f4704a23a447";
var clientKey = "e9d5a5fa0057afa0aa4b0eb0bbd0787c4849fffb165647ba122bbbc2e659930b";
var ncmb = new NCMB(appKey, clientKey);
var roomlist;

function editSelects(event) {
  var RoomDB = ncmb.DataStore("RoomDB");
  var num;//使用状況比較のための部屋タイプ別の個数
  var numstart;//使用状況比較のための部屋の開始index
  var searchType;//部屋タイプ
  document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  switch (event.target.value) {
    case 'lecture':
      searchType = "講義室";
      num = 26;
      numstart = 1;
    break;
    case 'exercise':
       searchType = "演習室";
       num = 12;
       numstart = 27;
    break;
    case 'experiment':
       searchType = "実験室";
       num = 4;
       numstart = 39;
    break;
    case 'conference':
       searchType = "会議室";
       num = 9;
       numstart = 43;
    break;
    case 'seminar':
       searchType = "ゼミ室";
       num = 5;
       numstart = 52;
    break;
    case 'other':
       searchType = "その他";
       num = 13;
       numstart = 57;
    break;
  }
  RoomDB.equalTo("type", searchType)
                   .order("orderid", false)
                   .fetchAll()
                   .then(function(results){
                     roomlist = results;
                     setUsedLists(results, num, numstart);
                   })
                   .catch(function(error){
                      alert("error!");
                   });
}

function setUsedLists(lists, num, numstart) {
  var statusjpg = new Array(num);//現在の使用状況の画像配列
  for(i=0; i<num; i++){
    statusjpg[i] = "img/mark_maru.png";
  }//初期化
  var campusStatus = JSON.parse(localStorage.getItem('campusStatus'));
  var date = new Date();
  var today = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" ";
  for(i=numstart,k=0; i<num+numstart; i++,k++){
    var open = new Date(today + lists[k].open);
    var close = new Date(today + lists[k].close);
    if(date < open || close < date){
      statusjpg[k] = "img/mark_batsu.png";
      continue;
    }
    for(j=1; j<campusStatus[i].length; j++){
      var start = new Date(today + campusStatus[i][j].start);
      var end = new Date(today + campusStatus[i][j].end);
      if(start <= date && date < end){
        statusjpg[k] = "img/mark_batsu.png";
      }
      else continue;
    }
  }
  var list = document.getElementById('infinite-list'); 
    list.delegate = {
      createItemContent: function(index) {
        // 配列を作成
        return ons.createElement('<ons-list-item class="room-list">' +
                                                '<div class="left">' +
                                                  '<img class="list-item__thumbnail" src="'+statusjpg[index]+'">' +
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

/*******ダイアログ設定*******/
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
/********ここまで*********/

//画面遷移のときに講義室の使用状況表示
document.addEventListener('show', function(event){
  if(event.target.id == 'useCampus'){
    var RoomDB = ncmb.DataStore("RoomDB");
    RoomDB.equalTo("type", "講義室")
                    .order("orderid", false)
                    .fetchAll()
                    .then(function(results){
                      roomlist = results;
                      setUsedLists(results, 26, 1);
                    })
                    .catch(function(error){
                        alert("error!");
                    });
  }
});
