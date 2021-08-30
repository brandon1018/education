var intern =
	['강태종', '신재영', '이도현', '임재욱',
		'임채성', '장진영', '조민정',   '최호석',  
		'한상기', '한승식', '홍다혜'];

function selectAll(selectAll) {
	const checkboxes = document.getElementsByName('intern');
	checkboxes.forEach((checkbox) => {
		checkbox.checked = selectAll.checked;
	})
}

function checkSelectAll() {
	const checkboxes
		= document.querySelectorAll('input[name="intern"]');
	// 선택된 체크박스
	const checked
		= document.querySelectorAll('input[name="intern"]:checked');
	// select all 체크박스
	const selectAll
		= document.querySelector('input[name="selectall"]');

	if (checkboxes.length === checked.length) {
		selectAll.checked = true;
	} else {
		selectAll.checked = false;
	}


}

function randomNum() {
	//체크된 목록
	const query = 'input[name="intern"]:checked';
	const selectedEls = document.querySelectorAll(query);

	var arr = [];
	//체크된 목록의 value값으로 배열 생성
	selectedEls.forEach((el) => {
		arr.push(el.value);
	});

	var randNum = Math.floor(Math.random() * arr.length);
	result = arr[randNum];
	if (arr.length === 0) {
		alert('최소 1명 이상을 선택해주세요.')
	} else {
		document.getElementById('result').innerText = '🎊 ' + intern[result] + '님 🎊';
	}
}


window.onload = function() {
}