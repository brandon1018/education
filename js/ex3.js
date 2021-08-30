var past;
var curr;

function getDate() {
	past = document.getElementById("past").value;
	var pastDate = new Date(past);
	curr = document.getElementById("curr").value;
	var currDate = new Date(curr);
	if (pastDate.getFullYear() < 1900 || pastDate.getFullYear() >= 3000 || currDate.getFullYear() < 1900 || currDate.getFullYear() >= 3000) {
		alert('날짜를 다시 입력해주세요.');
	} else {
		pastMili = Date.parse(pastDate);
		currMili = Date.parse(currDate);
		dif = currMili - pastMili;
		difDay = Math.abs(dif / 1000 / 60 / 60 / 24);
		alert(past + '와 ' + curr + '의 차이는 ' + difDay + '일입니다.');
	}
}
window.onload = function() {
	const set = document.getElementById("calcBtn")
}