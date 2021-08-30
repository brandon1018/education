
var fbword = ['ㅅㅂ', '시발', '개새끼'];

function show_msg() {
	var chat = document.getElementById("send_msg").value;
	for (var i = 0; i < fbword.length; i++) {
		chat = chat.replace(new RegExp(fbword[i], 'gi'),
			byul(fbword[i].length));
	}

	document.getElementById("result").innerHTML += chat + "<br>";
	document.getElementById("send_msg").value = null;
}


function byul(a) {
	var a, j;
	var s = "";
	for (j = 0; j < a; j++) {
		s = s + '*';
	}
	return s;
}


function del() {
	var element = document.getElementById("result");
	element.innerText = '';
}

window.onload = function() {
	const input = document.getElementById("send_msg")
	const button = document.getElementById("message_button")

	input.addEventListener("keydown", e => {
		if (e.keyCode === 13) {
			send()
		}
	})
	button.addEventListener("click", () => {
		send()
	})
}