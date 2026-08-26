// Your code here

var questionsArr = [
    {
        question: 'Mary Stuart was the Queen of Scotland.',
        answer: true
    },
    {
        question: 'Mary Stuart was the Queen Consort of Spain.',
        answer: false
    },
    {
        question: 'Tomatoes are fruits.',
        answer: true
    },
    {
        question: 'The Florida Panthers have won 2 Stanley Cups.',
        answer: true
    },
    {
        question: 'The tradition of the Christmas tree originated in England.',
        answer: false
    },
    {
        question: 'The Florida Gator\'s Men Basketball Team won the NCAA National Championship in 2026.',
        answer: false
    },
    {
        question: 'The killer in the Scream movies is called Ghostface.',
        answer: true
    },
]

function runQuiz() {
    var myScore = 0;
    for (var i=0; i<questionsArr.length; i++) {
        var answer = confirm(questionsArr[i].question);
        console.log(answer);

        if(answer==questionsArr[i].answer){
            myScore++;
        }
    }

    var finalScore = myScore/questionsArr.length;
    alert('Your final score is ' + Math.round(finalScore * 100) + '%');
}




/*var userAnswer = prompt(questionsArr[i].question + ' (true/false)');
        if (userAnswer.toLowerCase() === questionsArr[i].answer.toString()) {
            alert('Correct!');
        } else {
            alert('Incorrect. The correct answer is ' + questionsArr[i].answer);
        }*/