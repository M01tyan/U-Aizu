var appKey = "41ee8f45a609ae3f379a2a73f9c1990b329b41ed299bf0294266f4704a23a447";
var clientKey = "e9d5a5fa0057afa0aa4b0eb0bbd0787c4849fffb165647ba122bbbc2e659930b";
var ncmb = new NCMB(appKey, clientKey);

function setDB(){
  var RoomDB = ncmb.DataStore("RoomDB");

  var roomDB = new RoomDB();
  roomDB.set("orderid", 0)
              .set("week", "平日")
              .set("roomname", "212")
              .set("roomid", "")
              .set("place", "")
              .set("type", "会議室")
              .set("open", "8:30")
              .set("close", "18:00")
              .set("status", true)
              .save()
              .then(function(results){
                  //保存に成功した場合の処理
                  console.log("success!");
              })
              .catch(function(err){
                  //保存に失敗した場合の処理
              });
}

/*********campusStatusの初期化**********/
var campusStatus = new Array(70);
for(i=0; i<70; i++){
  campusStatus[i] = new Array({start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""}, {start: "", end: ""});
}
/*************ここまで****************/

//施設利用状況を抜き出す
function getSchedule(){
  var yobi= new Array("日","月","火","水","木","金","土");
  var date = new Date();
  var day = date.getDate();
  var week = date.getDay();
    $.ajax({
        type: 'GET',
        url: 'https://csweb.u-aizu.ac.jp/campusweb/campussquare.do?_flowId=KHW0001300-flow',
        datatype: 'html',
        success: function(data){
          var data1 = [];
          var data2 = [];
          var i = 0;
          
          //table列を配列にpush
          $(data).find('td').each(function() {
            if(i > 19 && i < 71){
              if(i%2 == 0) data1.push($(this).text());
            } else if(71 < i && i < 96){
              if(i%2 == 1) data1.push($(this).text());
            } else if(96 < i && i < 105){
              if(i%2 == 0) data1.push($(this).text());
            } else if(105 < i && i < 124){
              if(i%2 == 1) data1.push($(this).text());
            } else if(124 < i && i < 135){
              if(i%2 == 0) data1.push($(this).text());
            } else if(135 < i && i < 162){
              if(i%2 == 1) data1.push($(this).text());
            }
            i++;
          });

          //列を行に分ける
          for(i=0; i<data1.length; i++){
            data2[i] = data1[i].split("　");
          }

          //時刻だけ抜き出す
          for(k=0; k<data2.length; k++){
            for(i=1; i<data2[k].length-1; i++){
              var cnt = 0;
              for(j=0; j<data2[k][i].length; j++){
                if(isNaN(data2[k][i][j])) cnt++;
                else {
                  if(data2[k][i][j] == " "){
                    cnt++;
                    continue;
                  } 
                  data2[k][i] = data2[k][i].slice(cnt);
                  break;
                }
              }
            }
          }

          //localStorageに保存
          for(i=0; i<data2.length; i++){
            for(j=0; j<data2[i].length-1; j++){
              var data = data2[i][j].split("-");
              if(data[0] == "<<"){
                data[0] = "0:00";
                data[1] = "23:59";
              }
              campusStatus[i][j].start = data[0];
              campusStatus[i][j].end = data[1];
            }
          }
          localStorage.setItem('campusStatus', JSON.stringify(campusStatus));
        },
        error: function(err){
          console.log(err);
        }
    });
} 


document.addEventListener('show', function(event){
  if(event.target.id == 'home'){
    var date = new Date();
    var day = date.getDate();
    var week = date.getDay();
    
    localStorage.setItem('beforeDate', JSON.stringify(2));
    if(localStorage.getItem('beforeDate') != day){
    console.log("openSystem");
      var ref  = window.open('https://csweb.u-aizu.ac.jp/campusweb/campussmart.do?locale=ja_JP', '_blank', 'toolbar=yes,location=no,toolbarposition=buttom,enableViewportScale=yes,hidden=yes');
        ref.addEventListener('loadstop', function() {
            ref.executeScript({
              code: "var userName = document.querySelector('#LoginFormSimple input[name=userName]'); userName.value="+localStorage.getItem('userId')+"; var password=document.querySelector('#LoginFormSimple input[name=password]'); password.value="+localStorage.getItem('password')+"; document.querySelector('#LoginFormSimple button').click();"
            }, function() {
              setTimeout(getSchedule, 2000);
              setTimeout(ref.close, 10000);
              localStorage.setItem('beforeDate', JSON.stringify(day));
            });
          return false;
        });
      $.ajax({
        type: 'GET',
        url: 'http://www.gakushoku.com/univ_mn2.php',
        datatype: 'html',
        success: function(data){
          var i = 0;
          var index;
          $(data).find('th').each(function (){
            var now = $(this).text();
            now = now.split('日');
            if(now[0] == day) index = i;
            i++;
          });
          var menu = [];
          $(data).find('td').each(function() {
            menu.push($(this).text());
          });
          var gakushoku = [];
          gakushoku.push(menu[index-1]);
          gakushoku.push(menu[5+index-1]);
          gakushoku.push(menu[10+index-1]);
          gakushoku.push(menu[15+index-1]);
          gakushoku.push(menu[20+index-1]);
          gakushoku.push(menu[25+index-1]);
          gakushoku.push(menu[30+index-1]);
          gakushoku.push(menu[35+index-1]);
          gakushoku.push(menu[40+index-1]);
          localStorage.setItem('gakushoku', JSON.stringify(gakushoku));
        },
        error: function(err){
          console.log(err);
        }
    });
    } 
  }
});

document.addEventListener('show', function(event){
  if(event.target.id == 'gakushoku'){
    var gakushoku = JSON.parse(localStorage.getItem('gakushoku'));
    for(var i=0; i<gakushoku.length; i++){
      var menu = document.getElementById('menu-'+i);
      menu.innerHTML = gakushoku[i];
    }
  }
});