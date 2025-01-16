



var questions =[
    {id: 1, questionText: 'this is 1ST qustion', answerText: '3'},
    {id: 2, questionText: 'this is 2ND qustion', answerText: '1'},
    {id: 3, questionText: 'this is 3RD qustion',  answerText: '4'},
]

var score = 0
var trueAnswer = 0
var falseAnswer = 0
for (var i = 0 ; i < questions.length ; i++) {
    var UserAnswer = prompt(`which one is true:\n\n${questions[i].questionText} \n1.optionOne \n2.optionTow \n3.optionThree \n4.optionFour`)
    if(UserAnswer === questions[i].answerText){
        score++
        trueAnswer++
    }else{
        score += 0
        falseAnswer++
    }
}
alert(`you Answered: \n✅ ${trueAnswer} trueAnwers \n❌ ${falseAnswer} falseAnswers\n\n📊 your Score is ${score}`)
