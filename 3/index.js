
function f(uri) {
	 sub.onclick = async function(e) {
	 	let url = 'http://lesspv/3/3.php?msg='+uri.value;
		let response = await fetch(url);
		let c = await response.text();
		resp.innerHTML = "Ответ сервера: "+c;
		mouse.innerHTML = "Позиция мыши<br>X: "+e.clientX+"<br>Y: "+e.clientY;
	 }

	// if(c=='failed'){
	// 	alert("Ошибка доставки");
	// }else{
	// 	alert("Успешно отправлено");
	// }
}

let text = document.getElementsByTagName('textarea')[0];
let sub = document.getElementById('sub');
let resp = document.getElementById('resp');
let mouse = document.getElementById('mouse');

f(text);


document.oncontextmenu = function(){
	return false;
}