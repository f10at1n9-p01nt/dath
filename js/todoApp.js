const submitted = document.querySelector('form');
const newTodoInput = document.querySelector('input[name="newtodo"]');
const ul = document.querySelector('ul');
let newLi = document.createElement('li');

submitted.addEventListener('submit', function(event) {
	event.preventDefault();
	const newLi = document.createElement('li');
	newLi.innerText = newTodoInput.value;
	ul.append(newLi);
	newTodoInput.value = '';
});
