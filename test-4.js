// var John = [
//     firstName = 'John',
//     lastName = 'Anderson',
//     mass = 50,
//     height = 0.2,
//     calcBmi = function() {
//         this.j_bmi = this.mass / this.height ^ 2;
//         return j_bmi
//     },
//     this.calcBmi()
// ]

// var Mike = [
//     firstName = 'Mike',
//     lastName = 'tyson',
//     mass = 50,
//     height = 0.2,
//     calcBmi = function() {
//         m_bmi = this.mass / this.height ^ 2;
//         return m_bmi;
//     },
//     this.calcBmi()
// ]

// if (m_bmi > j_bmi) {
//     console.log(`Mike has higher BMI of ${m_bmi} Whereas John has BMI of ${j_bmi}`)

// } else if (m_bmi < j_bmi) {
//     console.log(`John has higher BMI of ${j_bmi} Whereas Mike has BMI of ${m_bmi}`)
// } else {
//     console.log(`Mike and John have same BMI of ${j_bmi}`)
// }


// OR

var John = {
    fullName: 'John Cooper',
    mass: 5,
    height: 0.2,
    calcBmi: function() {
        this.j_bmi = this.mass / this.height ^ 2;
        return this.j_bmi;
    },

}


var Mike = {
    fullName: 'Mike Tyson',
    mass: 50,
    height: 0.2,
    calcBmi: function() {
        this.m_bmi = this.mass / this.height ^ 2;
        return this.m_bmi;
    },

}
John.calcBmi();
Mike.calcBmi();

if (Mike.m_bmi > John.j_bmi) {
    console.log(`${Mike.fullName} has higher BMI of ${Mike.m_bmi} Whereas John has BMI of ${John.j_bmi}`)

} else if (Mike.m_bmi < John.j_bmi) {
    console.log(`${John.fullName} has higher BMI of ${John.j_bmi} Whereas Mike has BMI of ${Mike.m_bmi}`)
} else {
    console.log(`${Mike.fullName} and ${John.fullName} have same BMI of ${John.j_bmi}`)
}