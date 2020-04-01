const submitted = document.querySelector('form');
const ul = document.querySelector('ul');

function addItem() {
	const newTodoInput = document.querySelector('input[name="newtodo"]');
	const newLi = document.createElement('li');
	const newCheckbox = document.createElement('input');
	newCheckbox.type = 'checkbox';
	newCheckbox.value = 1;

	newLi.innerText = newTodoInput.value;
	ul.append(newLi);
	newLi.append(newCheckbox);
	newTodoInput.value = '';
}

submitted.addEventListener('submit', function(event) {
	event.preventDefault();
	addItem();
});
