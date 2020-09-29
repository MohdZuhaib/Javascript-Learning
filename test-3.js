// var tips, t0tal;
// var tip_1, tip_2, tip_3;
// var tot_1, tot_2, tot_3;


// tips = [tip_1, tip_2, tip_3]
// t0tal = [tot_1, tot_2, tot_3];

// function tipCalc(num) {
//     if (num < 50) {
//         return 0.2 * num;
//     } else if (num > 50 && num < 200) {
//         return 0.15 * num;
//     } else {
//         return 0.1 * num;
//     }
// }
// tip_1 = tipCalc(124);
// tip_2 = tipCalc(48);
// tip_3 = tipCalc(268);

// tot_1 = tip_1 + 124;
// tot_2 = tip_2 + 48;
// tot_3 = tip_3 + 268;

// tips = ['Tips: ',
//     tip_1, tip_2, tip_3
// ]
// t0tal = ['Total ' +
//     tot_1 + ' ; ' + tot_2 + '; ' + tot_3
// ]

// console.log(tips, t0tal)

// OR
function tipCalc(bill) {
    var perc;
    if (bill < 50) {
        perc = .2;
    } else if (bill > 50 && bill < 200) {
        perc = .15;
    } else {
        perc = .1;
    }
    return perc * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]),
    tipCalc(bills[1]),
    tipCalc(bills[2])
]

var total = [tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]

]

console.log(tips, total)