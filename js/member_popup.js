var para = document.location.href.split("?");

var db = openDatabase('myDB', '1.0', 'This is my DB', 2 * 1024 * 1024);


function change() {

    var getEmpnm = document.getElementById("EMPNM").value;
    var getDept = document.getElementById("DEPT").value;
    var getRole = document.getElementById("ROLE").value;
    //var list_tbody = document.getElementById('list_tbody');
    if (getEmpnm == "" || getDept == "" || getRole == "") {
        alert('모든 항목을 입력해주세요');
    } else {
        var query_update =
            "UPDATE MEMBER SET (EMPNM,DEPT,ROLE) = (?, ?, ?) WHERE EMPNO = " + para[1];
        db.transaction(function (tx) {
            tx.executeSql(query_update, [getEmpnm, getDept, getRole], function(){
                opener.parent.location.reload();
                window.close();
            });
        });
    }
}


window.onload = function () {

    var changeBtn = document.getElementById('changeBtn');
    changeBtn.addEventListener('click', change);

    var closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener("click", function () {
        window.close();
    });
}