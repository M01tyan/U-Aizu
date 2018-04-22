var appKey = "41ee8f45a609ae3f379a2a73f9c1990b329b41ed299bf0294266f4704a23a447";
var clientKey = "e9d5a5fa0057afa0aa4b0eb0bbd0787c4849fffb165647ba122bbbc2e659930b";
var ncmb = new NCMB(appKey, clientKey);

function setDB(){
  var CourseDB = ncmb.DataStore("CourseDB");

  var courseDB = new CourseDB();
  roomDB.set("week", "平日")
              .set("roomname", "テニスコートB2")
              .set("roomid", "")
              .set("place", "運動場")
              .set("type", "その他")
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
function campusStatus(start, end){
  this.start = start;
  this.end = end;
}
var campusStatus = new Array(70);
for(i=0; i<70; i++){
  campusStatus[i] = new Array(10);
}
/*************ここまで****************/

//シラバスを抜き出す
function getSchedule(){
  var yobi= new Array("日","月","火","水","木","金","土");
  var date = new Date();
  var day = date.getDate();
  var week = date.getDay();
  console.log(yobi[week]);
  if(yobi[week] != "土" || yobi[week] != "日"){
    $.ajax({
        type: 'GET',
        url: 'https://csweb.u-aizu.ac.jp/campusweb/campussquare.do?_flowId=KHW0001300-flow',
        datatype: 'html',
        success: function(data){
          data = data.split("<td width=\"60%\" class=\"kyuko-cal-donichi center\">"+day+"("+yobi[week]+")</td>");
          data = data[1].split("<td width=\"60%\" class=\"kyuko-cal-donichi center\">"+(day+1)+"("+yobi[(week+1)]+")</td>");
          data = data[0].split("<td valign=\"top\">");
          //console.log(data[1]);
          for(i=1; i<70; i++){
            var data2 = data[i].split("<span class=\"kyuko-shi-jugyo\">");
            for(j=0; j<data2.length; j++){
              var data3 = data2[j].split("</span>");
              if(data3[0].match('<br>')) break;
              var data4 = data3[0].split(/-|\s/, 3);
              console.log(data4[0]);
              //campusStatus[i][j].start = data4[0];
              //campusStatus[i][j].end = data4[1];
              //campusStatus[i][j].name = data4[2];
              //console.log(campusStatus[i][j]);
              //console.log(campusStatus[i][j]);
            }
          }
        },
        error: function(err){
          console.log(err);
        }
    });
  } 
}

function openSystem(){
  var date = new Date();
  var day = date.getDate();
  var week = date.getDay();
  localStorage.setItem('beforeDate', JSON.stringify(1));
  if(localStorage.getItem('beforeDate') != day && (week != '0' || week != 6)){
    ref = window.open('https://csweb.u-aizu.ac.jp/campusweb/campussmart.do?locale=ja_JP', '_blank', 'toolbar=yes,location=no,toolbarposition=buttom,enableViewportScale=yes,hidden=yes');
    ref.addEventListener('loadstop', function() {
        ref.executeScript({
          code: "var userName = document.querySelector('#LoginFormSimple input[name=userName]'); userName.value="+localStorage.getItem('userId')+"; var password=document.querySelector('#LoginFormSimple input[name=password]'); password.value="+localStorage.getItem('password')+"; document.querySelector('#LoginFormSimple button').click();"
        }, function() {
          setTimeout(getSchedule, 2000);
          setTimeout(ref.close, 10000);
          localStorage.setItem('beforeDate', JSON.stringify(day));
        });
      });
      return false;
  }
}
