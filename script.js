// 1.
//Напишіть функцію, яка приймає 2 числа і повертає -1, якщо
//перше менше, ніж друге; 1 - якщо перше більше, ніж друге;
//0 - якщо числа рівні.
//--
//function compNum(a, b) 
//{
//    if (a < b) 
//    {
//        return -1;
//    } 
//    else if (a > b) 
//    {
//        return 1;
//    } 
//    else 
//    {
//        return 0;
//    }
//}
//alert(compNum(5, 10));
//alert(compNum(10, 5));
//alert(compNum(5, 5));

// 2.
//Напишіть функцію, яка вираховує факторіал переданого їй числа.
//--
//function factor(n) 
//{
//    if (n === 0 || n === 1) 
//    {
//        return 1;
//    } 
//    else 
//    {
//        return n * factor(n - 1);
//    }
//}
//alert(factor(5));
//alert(factor(0));
//alert(factor(1));

// 3.
//Напишіть функцію, яка приймає три окремі цифри і пе-
//ретворює їх на одне число. Наприклад: цифри 1, 4, 9 пере-
//творяться на число 149.
//--
//function combineDigits(digit1, digit2, digit3) 
//{
//    return parseInt(digit1.toString() + digit2.toString() + digit3.toString());
//}
//alert(combineDigits(1, 4, 9));
//alert(combineDigits(5, 0, 2));

// 4.
//Напишіть функцію, яка приймає довжину та ширину прямо-
//кутника і обчислює його площу. Якщо у функцію передали.
//--
//function calculArea(length, width) 
//{
//    if (width === undefined) 
//    {
//        return length * length;
//    } 
//    else 
//    {
//        return length * width;
//    }
//}
//alert(calculArea(5, 4));
//alert(calculArea(5));

// 5.
//Напишіть функцію, яка перевіряє, чи є передане їй число
//досконалим. Досконале число – це число, що дорівнює сумі
//всіх своїх власних дільників.
//--
//function isPerfNum(number) 
//{
//    let sum = 0;
//    for (let i = 1; i < number; i++) 
//    {
//        if (number % i === 0) 
//        {
//            sum += i;
//        }
//    }
//    return sum === number;
//}
//alert(isPerfNum(6));
//alert(isPerfNum(28));
//alert(isPerfNum(12));

// 6.
//Напишіть функцію, яка приймає мінімальне і максимальне
//значення для діапазону і виводить ті числа з діапазону, які
//є досконалими. Використовуйте написану раніше функцію,
//щоб перевірити число на досконалість.
//--
//function isPerfNum(number) 
//{
//    let sum = 0;
//    for (let i = 1; i < number; i++) 
//    {
//        if (number % i === 0) 
//        {
//            sum += i;
//        }
//    }
//    return sum === number;
//}
//function isPerfNumInRange(min, max) 
//{
//    for (let i = min; i <= max; i++) 
//    {
//        if (isPerfNum(i)) 
//        {
//            console.log(i);
//        }
//    }
//}
//alert("Perfect numbers in the range from 1 to 100:");
//isPerfNumInRange(1, 100);

// 7.
//Напишіть функцію, яка приймає час (години, хвилини,секунди) 
//і виводить його на екран у форматі «година: хвилини:секунди». 
//Якщо при виклику функції хвилини
//та / або секунди не були передані, виводити їх як 00.
//--
//function formatTime(hours, minutes, seconds) 
//{
//    minutes = minutes || 0;
//    seconds = seconds || 0;
//    hours = hours < 10 ? "0" + hours : hours;
//    minutes = minutes < 10 ? "0" + minutes : minutes;
//    seconds = seconds < 10 ? "0" + seconds : seconds;
//    alert(hours + ":" + minutes + ":" + seconds);
//}
//formatTime(8, 30, 45);
//formatTime(11, 5);
//formatTime(17); 

// 8.
//Напишіть функцію, яка приймає години, хвилини та секунди 
//і повертає цей час у секунди.
//--
//function timeToSeconds(hours, minutes, seconds) 
//{
//    return hours * 3600 + minutes * 60 + seconds;
//}
//alert(timeToSeconds(1, 30, 45));
//alert(timeToSeconds(0, 5, 0));

// 9.
//Напищіть функцію, яка приймає кількість секунд, переводить 
//їх у години, хвилини та секунди і повертає у вигляді
//рядка «година:хвилини:секунди».
//--
//function secondsToTime(totalSeconds) 
//{
//    const hours = Math.floor(totalSeconds / 3600);
//    const minutes = Math.floor((totalSeconds % 3600) / 60);
//    const seconds = totalSeconds % 60;   
//    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//}
//alert(secondsToTime(3665));
//alert(secondsToTime(7250));

// 10.
//Напишіть функцію, яка підраховує різницю між датами. 
//Функція приймає 6 параметрів, що описують 2 дати,
//і повертає результат у вигляді рядка «година:хвилини:
//секунди». Під час виконання завдання використовуйте
//функції з попередніх 2 завдань: спочатку обидві дати переведіть 
//у секунди, дізнайтеся різницю в секундах, а потім
//різницю переведіть назад у «година:хвилини:секунди».
//--
function timeToSec(hours, minutes, seconds) 
{
    return hours * 3600 + minutes * 60 + seconds;
}
function secToTime(totalSeconds) 
{
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;   
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
function diffBetDates(hours1, minutes1, seconds1, hours2, minutes2, seconds2) 
{
    const totalSec1 = timeToSec(hours1, minutes1, seconds1);
    const totalSec2 = timeToSec(hours2, minutes2, seconds2); 
    const diffSec = Math.abs(totalSec1 - totalSec1);
    return secToTime(diffSec);
}
alert(diffBetDates(12, 0, 0, 9, 30, 15));
