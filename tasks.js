// Table of x
// var a = []
// var i = 1;

// function table(n) {
//     var startFrom = n;
//     while (startFrom <= n + 10) {
//         for (i = 1; i <= 10; i++) {
//             a[i] = startFrom * i;
//             console.log(`${startFrom} X ${i} = ${a[i]}`);
//         }
//         startFrom++;
//     }
// }

// table(2)

// Find out odd even:

// function oddEven(n) {
//     var n;
//     if (n % 2 == 0) {
//         console.log('Number is even')
//     } else {
//         console.log('Number is odd')
//     }
// }
// oddEven(5031040890)

// Fibonacci series
// var sum = [0, 1];

// for (i = 2; i <= 20; i++) {
//     sum[i] = sum[i - 1] + sum[i - 2]
// }
// console.log(sum)

// Armstrong Number
// var string
// var arm = 0

// function toString(num) {
//     string = num.toString()
// }
// toString(239)
//     // console.log(string)

// function armStrong(string) {
//     var i = 0;
//     // for (i = 0; i < string.length; i++) {
//     //     arm = string[i] * string[i] * string[i] + string[i + 1] * string[i + 1] * string[i + 1]
//     // }
//     while (i < string.length) {
//         arm = arm + (string[i] * string[i] * string[i]);
//         i++;
//     }
//     return arm;
// }

// console.log(` The Armstrong number of ${string} is ${armStrong(string)}`)

// EXTRA--
// Sum of n numbers
// var n = []
// var sum = 0

// function toString(num) {
//     n = num.toString()
// }

// function sumn(n) {
//     for (i = 0; i < n.length; i++) {
//         sum = sum + parseInt(n[i])
//     }
//     return sum
// }
// console.log(toString(123))
// console.log(sumn(n))



// print 10 nos w/o loop
// var i = 1;

// function numt() {
//     if (i > 15) {
//         return;
//     }



//     console.log(i)
//     i = i + 1;

//     numt();
// }
// numt()


// Star patterns

// --rt triangle


for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i + 1; j++) {
        console.log("*")

    }
    console.log('')
}