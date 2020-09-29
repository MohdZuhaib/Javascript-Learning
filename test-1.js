var johnMass, markMass, johnHeight, markHeight, johnBmi, markBmi, comp;
johnMass = 45;
markMass = 48;
johnHeight = 0.12;
markHeight = 0.1;
johnBmi = johnMass / (johnHeight * johnHeight);
markBmi = markMass / (markHeight * markHeight);
console.log('John BMI is ' + johnBmi + ' and Mark BMI is ' + markBmi)
    // comp = markBmi > johnBmi;
    // console.log('Is Mark`s BMI greater than John? ' + comp)
if (johnBmi > markBmi) {
    console.log('John has higher BMI ')
} else {
    console.log('Mark has higher BMI')
}