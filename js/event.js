var db = openDatabase('testDB', '1.0', 'This is a test DB', 2 * 1024 * 1024);
var createQuery = "CREATE TABLE IF NOT EXISTS MEMBER(EMPNO INTEGER PRIMARY KEY AUTOINCREMENT, EMPNM VARCHAR2(10) NOT NULL, DEPT VARCHAR2(10),ROLE VARCHAR2(10))"
var insertQuery = "INSERT INTO MEMBER(EMPNM, DEPT, ROLE) VALUES(?,?,?)";

db.transaction(function(tx) {
	tx.executeSql(query, [], function() {
	});
})

window.onload = function() {
	
	
	var divs = document.querySelectorAll('div');

	divs.forEach(function(div) {
		div.addEventListener("click", function(e) {
			e.stopPropagation();
			console.log(div.className);
		});
	});
}
