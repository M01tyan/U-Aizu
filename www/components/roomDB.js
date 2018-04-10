function executeQuery(tx) {
        /*
        tx.executeSql('DROP TABLE IF EXISTS RoomTable');
        tx.executeSql('DROP TABLE IF EXISTS TypeTable');
        tx.executeSql('DROP TABLE IF EXISTS PlaceTable');
        tx.executeSql('DROP TABLE IF EXISTS TimeTable');
        tx.executeSql('DROP TABLE IF EXISTS WeekTable');
        */
        tx.executeSql('CREATE TABLE IF NOT EXISTS RoomTable (roomid primary key, name, typeid , placeid, timeid, weekid, status, foreign key (typeid) references TypeTable(typeid), foreign key (placeid) references TimeTable(placeid), foreign key (timeid) references TimeTable(timeid), foreign key (weekid) references TimeTable(weekid))');
        tx.executeSql('CREATE TABLE IF NOT EXISTS TypeTable (typeid, name)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS PlaceTable (placeid, name)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS TimeTable (timeid, open, close)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS WeekTable (weekid, openweek)');
        tx.executeSql('INSERT INTO TypeTable VALUES (1, "講義室")');
        tx.executeSql('INSERT INTO TypeTable VALUES (2, "演習室")');
        tx.executeSql('INSERT INTO TypeTable VALUES (3, "実験室")');
        tx.executeSql('INSERT INTO TypeTable VALUES (4, "会議室")');
        tx.executeSql('INSERT INTO TypeTable VALUES (5, "ゼミ室")');
        tx.executeSql('INSERT INTO TypeTable VALUES (6, "その他")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (1, "講義棟1F")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (2, "講義棟2F")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (3, "研究棟1F")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (4, "研究棟2F")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (5, "研究棟3F")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (6, "管理棟3F")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (7, "学生ホール3F")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (8, "体育館")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (9, "運動場")');
        tx.executeSql('INSERT INTO PlaceTable VALUES (10, "UBIC")');
        tx.executeSql('INSERT INTO TimeTable VALUES (1, "8:30", "18:00")');
        tx.executeSql('INSERT INTO TimeTable VALUES (2, "8:30", "20:30")');
        tx.executeSql('INSERT INTO TimeTable VALUES (3, "8:30", "23:59")');
        tx.executeSql('INSERT INTO TimeTable VALUES (4, "8:30", "17:00")');
        tx.executeSql('INSERT INTO TimeTable VALUES (5, "0:00", "23:59")');
        tx.executeSql('INSERT INTO WeekTable VALUES (1, "平日")');
        tx.executeSql('INSERT INTO WeekTable VALUES (2, "毎日")');
        tx.executeSql('INSERT INTO WeekTable VALUES (3, "授業のみ")');
        tx.executeSql('INSERT INTO RoomTable VALUES (1, "M1", 1, 2, 1, 1, "true")');
        
}

function queryDB(tx) {
        tx.executeSql('SELECT * FROM RoomTable', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
        var len = results.rows.length;
        for (var i=0; i<len; i++){
            document.writeln("row = " + i + " ID = " + results.rows.item(i).id + " Data = " + results.rows.item(i).name+"<br/>");
        }        
}

    //Callback function when the transaction is failed.
function errorCB(err) {
        console.log("Error occured while executing SQL: "+err.code);
}

    // Callback function when the transaction is success.
function successCB() {
        var db = window.openDatabase("RoomDB", "1.0", "RoomDB", 200000);
        //db.transaction(queryDB, errorCB);
}
   
function createDB(){
        var db = window.openDatabase("RoomDB", "1.0", "RoomDB", 200000);
        db.transaction(executeQuery, errorCB, successCB);
 
}