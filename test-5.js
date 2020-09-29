var bill = {
    bill1: 124,
    bill2: 48,
    bill3: 268,
    bill4: 180,
    bill5: 42,
    // calcTip: function(num){
    //         for()
    // }

}

// John Method
var tip = []
var finalAmount = []
var johnBill = [124, 48, 268, 180, 42,
    calctip = function() {
        for (i = 0; i < johnBill.length; i++) {
            if (johnBill[i] < 50) {
                tip[i] = 0.2 * johnBill[i]
            } else if (johnBill[i] > 50 && johnBill[i] < 200) {
                tip[i] = 0.15 * johnBill[i]
            } else {
                tip[i] = 0.1 * johnBill[i];
            }
            finalAmount[i] = johnBill[i] + johnBill[i]
        }
    }
]
calctip();
console.log(tip, johnBill, finalAmount)

// Mark method

var sum = 0
var tip = []
var finalAmount = []
var markBill = [77, 375, 110, 45,
    calctip = function() {
        for (i = 0; i < markBill.length; i++) {
            if (markBill[i] < 100) {
                tip[i] = 0.2 * markBill[i]
            } else if (markBill[i] > 100 && markBill[i] < 300) {
                tip[i] = 0.1 * markBill[i]
            } else {
                tip[i] = 0.25 * markBill[i];
            }
            finalAmount[i] = markBill[i] + tip[i]
        }
    }
]

function avgTips() {
    for (i = 0; i < String.length; i++) {
        sum = sum + tip[i]
    }
    tipAvg = sum / string.length
}
calctip();

console.log(tip, markBill, finalAmount)


// Correct methods
// --John Family--
// var john = {
//     fullName: 'John piper',
//     bills: [124, 48, 268, 180, 4200],
//     calctip: function() {
//         this.tip = [];
//         this.finalValues = [];
//         for (i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 50) {
//                 this.tip[i] = 0.2 * this.bills[i]
//             } else if (this.bills[i] > 50 && this.bills[i] < 200) {
//                 this.tip[i] = 0.15 * this.bills[i]
//             } else {
//                 this.tip[i] = 0.1 * this.bills[i];
//             }
//             this.finalValues[i] = this.bills[i] + this.tip[i]
//         }
//     }
// }

// john.calctip();
// // console.log(john)


// // --Mark Family--

// var mark = {
//     fullName: 'Mark Weber',
//     bills: [77, 475, 110, 45],
//     calctip: function() {
//         this.tip = [];
//         this.finalValues = [];
//         for (i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 100) {
//                 this.tip[i] = 0.2 * this.bills[i]
//             } else if (this.bills[i] > 100 && this.bills[i] < 300) {
//                 this.tip[i] = 0.1 * this.bills[i]
//             } else {
//                 this.tip[i] = 0.25 * this.bills[i];
//             }
//             this.finalValues[i] = this.bills[i] + this.tip[i]
//         }
//     }
// }

// mark.calctip();
// // console.log(mark);


// function avgTips(tip) {
//     var sum = 0;
//     for (i = 0; i < tip.length; i++) {
//         sum = sum + tip[i]
//     }
//     return sum / tip.length
// }
// mark.average = avgTips(mark.tip);
// john.average = avgTips(john.tip);
// console.log(john, mark)

// if (mark.average > john.average) {
//     console.log('Mark paid higher tip on average')
// } else {
//     console.log('John has paid higher tip on average')
// }