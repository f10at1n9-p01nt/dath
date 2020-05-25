// ? I think I understand why the below doesn't work, but want to ask
// const buttonsContainer = document.getElementsByClassName('buttons-grid')

const buttonsContainer = document.querySelector('.buttons-grid');
const display = document.querySelector('.card');
const answer = document.querySelector('.digit');
const questionP = document.querySelector('.question');
const userFeedback = document.querySelector('h1');
const newProblem = document.querySelector('.new-problem');
const checkButton = document.querySelector('.check');
const questionAnswer = document.querySelector('.hidden');

buttonsContainer.addEventListener('click', function(evt) {
	evt.preventDefault();
	if (evt.target.classList.contains('number')) {
		answer.innerHTML += evt.target.textContent;
	} else if (evt.target.classList.contains('new-problem')) {
		evt.preventDefault();
		console.log('new');
		answer.innerHTML = '';
		userFeedback.innerHTML = '';

		let question = generateQuestion();
		buildCard(question);
	} else {
		evt.preventDefault();

		// Here I retrieve it to pass to checkResponse
		let message = checkResponse(questionAnswer.innerHTML, answer.innerHTML);

		userFeedback.innerHTML = message;
	}
});

function generateQuestion() {
	const firstNumber = Math.floor(Math.random() * 13);
	const secondNumber = Math.floor(Math.random() * 13);
	const correctAnswer = firstNumber * secondNumber;

	// Here I store the answer in the DOM
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
