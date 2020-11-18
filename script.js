const questions = {
    "Cricket": [
        {
            "question": "Who is the Indian Captain?",
            "options": ["Dhoni","Sachin","Kohli","Ganguly"],
            "answer": 2
            // "img": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fforum.xploresports.com%2Ft%2Fpoll-who-is-your-all-time-favourite-indian-cricket-captain%2F1797&psig=AOvVaw1SeAqTE_4lHiwRMG_VpirZ&ust=1605762653813000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjX4pqqi-0CFQAAAAAdAAAAABAD'
        }, 
        {
            "question": "Who is the current wicket Keeper?",
            "options": ["Dhoni","Pant","Dravid","Ganguly"],
            "answer": 1
        },
        {
            "question": "Who is not retired yet?",
            "options": ["Dhoni","Sachin","Dravid","Dhawan"],
            "answer": 3
        }
    ],
    "Politics": [
        {
            "question": "Who is the current Prime Minister?",
            "options": ["Patel","Kovind","Rahul","Modi"],
            "answer": 3
        }, 
        {
            "question": "Who is the current President?",
            "options": ["Patel","Kovind","Rahul","Modi"],
            "answer": 1
        },
        {
            "question": "Who is from Gandhi family?",
            "options": ["Patel","Kovind","Rahul","Modi"],
            "answer": 2
        }
    ],
    "History": [
        {
            "question": "In which year India got Independence?",
            "options": [1997, 1947, 1857, 1000],
            "answer": 1
        }, 
        {
            "question": "Hilter was born in?",
            "options": ["Germany","France","Austria","Pakistan"],
            "answer": 2
        },
        {
            "question": "Mao was from which Country?",
            "options": ["Vietnam","Thailand","China","Pakistan"],
            "answer": 2
        }
    ],
    "Geography": [
        {
            "question": "Which country in not neighbour of India?",
            "options": ["Argentina","Myanmar","Mauritius","Pakistan"],
            "answer": 0
        }, 
        {
            "question": "India have how many States?",
            "options": [28, 29, 30, 31],
            "answer": 1
        },
        {
            "question": "Most rice producing country in world is?",
            "options": ["Canada","China","India","Brazil"],
            "answer": 1
        }
    ]
}

const types = ['Cricket', 'Politics', 'History', 'Geography'];
let currentQuestionNumber = 0;
let currentType = 0;
let data;
let answerGiven = false;

(function() {
    data = questions[types[currentType]]
    document.getElementById('quiz-type').innerHTML = types[0];
    setQuestion(currentQuestionNumber);
})();

function setQuestion() {
    document.getElementById('quiz-type').innerHTML = types[currentType];

    if(currentQuestionNumber > 3 || currentQuestionNumber < 0) return;
    console.log(data);
    document.getElementById('question-text').innerHTML = data[currentQuestionNumber].question;
    for(let i=0; i<4; i++) {
        let elem = document.getElementById(`option${i}`)
        elem.innerHTML = data[currentQuestionNumber].options[i]
        elem.style.backgroundColor = 'pink'
    }
}

function handleNext() {
    currentQuestionNumber = (currentQuestionNumber === data.length-1) ? data.length - 1 : ++currentQuestionNumber;
    setQuestion();
    answerGiven = false;
}

function handlePrev() {
    currentQuestionNumber = (currentQuestionNumber === 0) ? 0 : --currentQuestionNumber;
    setQuestion();
}

function handleAnswer(e) {
    let id = e.target.id;
    if(answerGiven || id === 'question-options') return;
    if (parseInt(id[id.length - 1]) == data[currentQuestionNumber].answer) {
        document.getElementById(id).style.background = 'green';
    } else {
        document.getElementById(id).style.background = 'red'
    }
    answerGiven = true;
}

function handleType(e) {
    console.log(e.target);
    let id = e.target.id;
    currentType = id;
    currentQuestionNumber = 0;
    data = questions[types[currentType]];
    setQuestion();
    answerGiven = false;
}