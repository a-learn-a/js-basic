let a = prompt("a")
let b = prompt("b")
let c = prompt("c")
let d = b ** 2 - 4 * a * c
console.log(d)
switch (true) {
    case d < 0:
        console.log("нет корней")
        break;
    case d == 0:
        x1 = b / (2 * a)
        console.log(x1)
        break;
    case d > 0:
        x1 = (-b + Math.sqrt(d)) / (2 * a)
        x2 = (-b + Math.sqrt(d)) / (2 * a)
        console.log(x1)
        console.log(x2)
        break;
}

// Здорово, что ты не забыл про break
// Обрати внимание, что switch() принимает переменную, которую хочет проверить на те или иные условия
// в твоем случае switch(d)
// так как мы хотим проверить дискриминант