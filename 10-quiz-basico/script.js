const myQuestions = [
    { question: "Qual tag é usada para criar um link em HTML?", options: { a: "<a>", b: "<link>", c: "<href>" }, correctAnswer: "a" },
    { question: "Qual propriedade CSS é usada para alterar a cor do texto?", options: { a: "font-color", b: "text-color", c: "color" }, correctAnswer: "c" },
    { question: "Qual método JavaScript seleciona um elemento pelo seu ID?", options: { a: "querySelector()", b: "getElementById()", c: "getElement()" }, correctAnswer: "b" }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const options = [];
        for (let letter in currentQuestion.options) {
            options.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.options[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="options">${options.join('')}</div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswerNode = answerContainer.querySelector(selector);
        const userAnswer = userAnswerNode ? userAnswerNode.value : undefined;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        }
    });

    resultsContainer.innerHTML = `Você acertou ${numCorrect} de ${myQuestions.length} perguntas!`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);