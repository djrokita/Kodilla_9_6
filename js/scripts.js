var list = document.getElementById('list');
var add = document.getElementById('addElem');

function countElem() {
	numberElem = document.getElementsByTagName('li');
	numberElem = numberElem.length - 1;
	return numberElem;
}
	
function newElem() {
	element = document.createElement('li');
	list.appendChild(element);
	element.innerHTML = "item " + countElem();
}

add.addEventListener('click', newElem);
