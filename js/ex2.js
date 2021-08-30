var object = {

}

function setAtt() {
	var attName = document.getElementById("att").value;
	var find = attName.indexOf(' = ');
	if (find === -1) {
		alert('잘못된 입력입니다.');
		return 0;
	} else {
		var attSplit = attName.split(' = ');
		if (object[attSplit[0]]) { // attName[0] in object
			alert('이미 존재하는 속성입니다.')	;
		} else {
			object[attSplit[0]] = attSplit[1];
			alert('[등록됨]\n속성명: ' + attSplit[0] + '\n속성값: ' + attSplit[1]);
		}
	}
}

function getAtt() {
	var attName = document.getElementById("att").value;
	var value = object[attName];
	if (object[attName]) {
		alert('[정보]\n속성명: ' + attName + '\n속성값: ' + value);
	} else {
		alert('해당하는 속성이 존재하지 않습니다.');
	}
}

function delAtt() {
	var attName = document.getElementById("att").value;
		if (object[attName]) {
		delete object[attName];
		alert(attName + '속성이 삭제되었습니다.');
	} else {
		alert('해당하는 속성이 존재하지 않습니다.');
	}
}

window.onload = function() {
	const set = document.getElementById("setBtn")
	const get = document.getElementById("getBtn")
	const del = document.getElementById("delBtn")

	set.addEventListener("click", () => {
		setAtt()
	})
	get.addEventListener("click", () => {
		getAtt()
	})
	del.addEventListener("click", () => {
		delAtt()
	})

}