let result = 0
let tests = [{
    question: 'Сколько секунд в одном часе?',
    answer: '3600'
}, {
    question: 'Сколько дней в високосном году?',
    answer: '366'
}]

const checkAnswer = (userResponse, answer) => {
    if (userResponse === answer) {
        alert('Правильный ответ')
        result = result + 1
    } else {
        alert('Неправильный ответ')
    }
}

for (let test of tests) {
    let userResponse = prompt(test.question)
    checkAnswer(userResponse, test.answer)
}

alert(`Правильных ответов: ${result}`)