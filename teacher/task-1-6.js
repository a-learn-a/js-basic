let a = +prompt('Введите значение "a"')
let b = +prompt('Введите значение "b"')
let c = +prompt('Введите значение "c"')
let D = Math.pow(b, 2) - 4 * a * c

// решение через if-else 
//if (D < 0) {
//    console.log('Корней нет')
//} else if (D === 0) {
//    console.log(b / (2 * a))
//} else {
//    console.log((-b + Math.sqrt(D)) / (2 * a))
//    console.log((-b - Math.sqrt(D)) / (2 * a))
//}

// но так мне нравится больше 
if (D < 0) {
    console.log('Корней нет')
}
if (D === 0) {
    console.log(b / (2 * a))
}
if (D > 0) {
    console.log((-b + Math.sqrt(D)) / (2 * a))
    console.log((-b - Math.sqrt(D)) / (2 * a))
}