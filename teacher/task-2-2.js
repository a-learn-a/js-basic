const randomNumber = Math.floor(Math.random() * 10) + 1
let attempts = 3

while (attempts > 0) {
    let num = prompt('Угадайте число')
    attempts--

    if (num == randomNumber) {
        alert('Вы угадали')
        break;
    }
    if (!attempts) {
        alert('Вы проиграли')
    }
}