let rate = prompt('Введите процентную ставку')

while (!Number(rate)) {
    rate = prompt(`Параметр 'ставка' содержит неправильное значение ${rate}`)
}

let initPayment = prompt('Введите первоначальный взнос')

while (!Number(initPayment) && initPayment != '0') {
    initPayment = prompt(`Параметр 'первоначальный взнос' содержит неправильное значение ${initPayment}`)
}

let loan = prompt('Введите сумму кредита')

while (!Number(loan)) {
    loan = prompt(`Параметр 'сумма кредита' содержит неправильное значение ${loan}`)
}

let time = prompt('Введите срок (дату окончания кредита) в формате "гггг-мм-дд"')

while (!Number(new Date(time)) || (new Date() - new Date(time) > 0)) {
    time = prompt(`Параметр 'дата окончания кредита' содержит неправильное значение ${time}`)
}

let S = loan - initPayment
let P = rate / 12 / 100
let n = new Date(time).getMonth() - new Date().getMonth() +
    (12 * (new Date(time).getFullYear() - new Date().getFullYear()))

let monthlyPayment = S * (P + (P / (Math.pow(1 + P, n) - 1)))

let sum = n * monthlyPayment
alert(sum.toFixed(2))