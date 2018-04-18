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

