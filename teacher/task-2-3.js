const birdPosition = 3
let attempts = 2

while (attempts > 0) {
  let userAnswer = +prompt("Введите угол наклона? (От 0 до 5)")
  attempts--

  if (userAnswer == birdPosition) {
    alert("Поздравляем, вы попали!")
    break
  }
  if (!attempts) {
    alert(`К сожалению, опять промах. Правильное число было ${birdPosition}`)
    break
  }
  if (userAnswer > birdPosition) {
    alert("Промах, возьмите чутка ниже.")
  }
  if (userAnswer < birdPosition) {
    alert("Промах, возьмите чутка повыше.")
  }
}