var user = {
    name: '',
    responses: [],
    rightAnswers : 0,
    wrongAnswers : 0,
    firstQuestion: function() {
        var answer = prompt('What is your name?');
        this.name = answer;
    },

    secondQuestion: function() {
        var answer = prompt('Does null === 0 ? (Yes / No)');

        if (answer.toLowerCase() === 'yes') {
            answer = true;
        } else if (answer.toLowerCase() === 'no') {
            answer = false;
        } else {
            alert('Please answer either Yes or No');
            this.secondQuestion();
        }

        this.responses.push(answer);
    },

    thirdQuestion: function() {
        var answer = prompt('Is JavaScript same thing as Java? (Yes / No)');

        if (answer.toLowerCase() === 'yes') {
            answer = false;
        } else if (answer.toLowerCase() === 'no') {
            answer = true;
        } else {
            alert('Please answer either Yes or No');
            this.thirdQuestion();
        }

        this.responses.push(answer);

    },

    fourthQuestion: function() {
        var answer = prompt('How many continents does Earth have? (3, 5, 7 or 8)');

        switch (answer.toLowerCase()) {
            case '3':
                answer = false;
                break;
            case '5':
                answer = false;
                break;
            case '7':
                answer = true;
                break;
            case '8':
                answer = false;
                break;
            default:
                alert('Please use only numbers 3, 5, 7 or 8 for answer.');
                this.fourthQuestion();
        }

        this.responses.push(answer);
    },

    fifthQuestion: function() {
        var answer = prompt('Which of these are text editors for programmers? \n1.Word \n2.Vim \n3.Notepad \n4.SublimeText \n5.Atom.io\n(Type in corresponding number)');

        switch (answer.toLowerCase()) {
            case '1':
                answer = false;
                break;
            case '2':
                answer = true;
                break;
            case '3':
                answer = true;
                break;
            case '4':
                answer = true;
                break;
            case '5':
                answer = true;
                break;
            default:
                alert('Please use only numbers 1 - 5 for an answer');
                this.fifthQuestion();
        }

        this.responses.push(answer);
    },
    
}

function evaluateResponses(responses) {

    for (var i = 0; i < responses.length; i++) {
        if (responses[i] === true) {
            user.rightAnswers++;
        } else {
            user.wrongAnswers++;
        }
    }

    showResults();
}

function showResults() {
    alert('You answered ' + (user.rightAnswers + user.wrongAnswers) + ' questions.');
    alert('Right answers: ' + user.rightAnswers);
    alert('Wrong answers: ' + user.wrongAnswers);
}


user.firstQuestion();
console.log(user.name);
user.secondQuestion();
console.log(user.responses[0]);
user.thirdQuestion();
console.log(user.responses[1]);
user.fourthQuestion();
console.log(user.responses[2]);
user.fifthQuestion();
console.log(user.responses[3]);

evaluateResponses(user.responses);
