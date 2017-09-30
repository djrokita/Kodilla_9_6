var list = document.getElementById('list');
var add = document.getElementById('addElem');

function countElem() {
	var numberElem = document.getElementsByTagName('li').length;
	return numberElem;
}
	

function newElem() {
	var element = document.createElement('li');
	element.innerHTML = "item " + countElem();
	list.appendChild(element);
}

add.addEventListener('click', newElem);
