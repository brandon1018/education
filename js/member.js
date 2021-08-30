window.onload = function () {

    var mcncTable = document.getElementById('table');
    var mcncTbody = document.getElementById('mcncTbody');


    // 1. DB 생성
    var db = openDatabase('myDB', '1.0', 'This is my DB', 2 * 1024 * 1024);

    // 2. 테이블 생성
    var query_table = "CREATE TABLE IF NOT EXISTS MEMBER(EMPNO INTEGER PRIMARY KEY AUTOINCREMENT, EMPNM VARCHAR2(10) NOT NULL, DEPT VARCHAR2(10), ROLE VARCHAR2(10))";
    db.transaction(function (tx) {
        tx.executeSql(query_table);
    });

    // 3. 처음에 테이블 로딩
    db.transaction(function (tx) {
        tx.executeSql("select * from MEMBER", [],
            function (tx, result) {
                for (var i = 0; i < result.rows.length; i++) {
                    var row = result.rows.item(i);
                    document.getElementById('mcncTbody').innerHTML +=
                        (

                            "<tr><td>" + row['EMPNO'] +
                            "</td><td>" + row['EMPNM'] +
                            "</td><td>" + row['DEPT'] +
                            "</td><td>" + row['ROLE'] +
                            "</td><td>" +
                            "<button type='button' class='btn_edit' id='btn_edit" + row['EMPNO'] + "'" +
                            "value=" + "'" + i + "'" + ">수정</button>" +
                            "<button type='button' class='btn_del' id='btn_del" + row['EMPNO'] + "'" +
                            "value=" + "'" + i + "'" + ">삭제</button>" + "</td></tr>"


                        );
                }
            });


    });

    // 4. 데이터 리셋
    function emp_reset() {
        var query_drop = "DROP TABLE MEMBER";
        db.transaction(function (tx) {
            tx.executeSql(query_drop);
            window.location.reload();
            console.log("reset");
        });

    }

    // 5. 데이터 삽입
    function emp_add() {

        var getEmpnm = document.getElementById("empnm").value;
        var getDept = document.getElementById("dept").value;
        var getRole = document.getElementById("role").value;
        //var list_tbody = document.getElementById('list_tbody');
        if (getEmpnm == "" || getDept == "" || getRole == "") {
            alert('모든 항목을 입력해주세요');
        } else {

            var query_insert = "INSERT INTO MEMBER(EMPNM,DEPT,ROLE) VALUES(?,?,?)";
            db.transaction(function (tx) {
                tx.executeSql(query_insert, [getEmpnm, getDept, getRole]);
            });
            window.location.reload();
            console.log("add");
        }
    }

    // 6. 데이터 조회
    function emp_list() {
        document.getElementById('mcncTbody').innerHTML = ("");

        db.transaction(function (tx) {
            tx.executeSql("select * from MEMBER", [],
                function (tx, result) {
                    for (var i = 0; i < result.rows.length; i++) {
                        var row = result.rows.item(i);
                        document.getElementById('mcncTbody').innerHTML +=
                            (
                                "<tr><td>" + row['EMPNO'] +
                                "</td><td>" + row['EMPNM'] +
                                "</td><td>" + row['DEPT'] +
                                "</td><td>" + row['ROLE'] +
                                "</td><td>" +
                                "<button type='button' class='btn_edit' id='btn_edit" + row['EMPNO'] + "'" +
                                "value=" + "'" + i + "'" + ">수정</button>" +
                                "<button type='button' class='btn_del' id='btn_del" + row['EMPNO'] + "'" +
                                "value=" + "'" + i + "'" + ">삭제</button>" + "</td></tr>"
                            );
                    }
                });
        });
        console.log("search");
        location.reload();
    }

    // 7. 특정 데이터 삭제
    function emp_del(n) {

        db.transaction(function (tx) {
            tx.executeSql("delete from MEMBER where EMPNO =" + (n));
            window.location.reload();
            console.log("delete from MEMBER where EMPNO =" + (n));
        });

    }

    // 8. 특정 데이터 수정
    function emp_edit(num) {
        window.open("member_popup.html?" + num, "팝업 테스트", "width=450, height=650, top=50, left=10");
    }

    var btn_del = document.getElementsByClassName('btn_del');
    console.log("btn_del" + btn_del);
    for (var i = 0; i < mcncTable.length; i++) {
        btn_del[i].addEventListener('click', get_rownum);
    }

    document.addEventListener("click", function (e) {
        e.stopPropagation();

        db.transaction(function (tx) {
            console.log("db:" + e.target + e.target.id);

            tx.executeSql("SELECT * FROM MEMBER", [],

                function (tx, result) {


                    for (let i = 0; i < result.rows.length; i++) {

                        let row = result.rows.item(i);

                        console.log("target: " + e.target.id);
                        console.log("btn_del" + row['EMPNO']);

                        if (e.target.id == ("btn_del" + row['EMPNO'])) {

                            // emp_del(e.target.id);
                            emp_del(row['EMPNO']);

                            //DBDelete(e.target.id);
                        }
                        if (e.target.id == ("btn_edit" + row['EMPNO'])) {
                            //member_popup 팝업창 띄우기
                            var num = row['EMPNO']
                            emp_edit(num);
                        }

                    }
                });
        });

    });

    var btn_add = document.getElementById('insertBtn');
    btn_add.addEventListener("click", emp_add);

    var btn_show = document.getElementById('showBtn');
    btn_show.addEventListener("click", emp_list);

    var btn_reset = document.getElementById('resetBtn');
    btn_reset.addEventListener("click", emp_reset);

}