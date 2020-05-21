// ? I think I understand why the below doesn't work, but want to ask
// const buttonsContainer = document.getElementsByClassName('buttons-grid')

const buttonsContainer = document.querySelector('.buttons-grid');
const display = document.querySelector('.card');
const answer = document.querySelector('.digit');
const questionP = document.querySelector('.question');
const h1 = document.querySelector('h1');
const newProblem = document.querySelector('.new-problem');
const checkButton = document.querySelector('.check');
const questionAnswer = document.querySelector('.hidden');

buttonsContainer.addEventListener('click', function(evt) {
	evt.preventDefault();
	let number = evt.target.textContent;

	answer.innerHTML += number;
});

newProblem.addEventListener('click', function(evt) {
	evt.preventDefault();
	answer.innerHTML = '';
	h1.innerHTML = '';

	let question = generateQuestion();
	buildCard(question);
});

checkButton.addEventListener('click', function(evt) {
	evt.preventDefault();

	let message = checkResponse(questionAnswer.innerHTML, answer.innerHTML);

	h1.innerHTML = message;
});

function generateQuestion() {
	const firstNumber = Math.floor(Math.random() * 13);
	const secondNumber = Math.floor(Math.random() * 13);
	const correctAnswer = firstNumber * secondNumber;

	questionAnswer.innerHTML = correctAnswer;

	return {
		firstNumber,
		secondNumber,
		correctAnswer
	};
}

function checkResponse(givenProblem, givenAnswer) {
	// Todo ternary
	if (givenProblem === givenAnswer) {
		return 'Correct!';
	}
	return 'Incorrect :(';
}

function buildCard(question) {
	// Todo destruture
	questionP.innerHTML = `${question.firstNumber} x ${question.secondNumber}`;
}
