var johnOne, johnTwo, johnThree;
var mikeOne, mikeTwo, mikeThree;
var maryOne, maryTwo, maryThree;
var avgJohn, avgMike, avgMary;


johnOne = 40;
johnTwo = 50;
johnThree = 50;

mikeOne = 50;
mikeTwo = 50;
mikeThree = 50;

maryOne = 50;
maryTwo = 50;
maryThree = 10;

avgJohn = (johnOne + johnTwo + johnThree) / 3;
avgMike = (mikeOne + mikeTwo + mikeThree) / 3;
avgMary = (maryOne + maryTwo + maryThree) / 3;

console.log('Scores are ' + 'Mike : ' + avgMike + ' ||' + ' John : ' + avgJohn + ' ||' + ' Mary : ' + avgMary)
if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John won with average score of ' + avgJohn);
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('Mike won with avg score of ' + avgMike)
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log('Mary won with avg score of ' + avgMary)
} else if (avgMary == avgJohn && avgJohn == avgMike) {
    console.log('It was a tie b/w all')
} else if (avgMary == avgJohn && avgJohn > avgMike) {
    console.log('Mary and john had a tie with a score of ' + avgMary)
} else if (avgMary == avgMike && avgMike > avgJohn) {
    console.log('Mary and mike had a tie with a score of ' + avgMary);
} else if (avgMike == avgJohn && avgJohn > avgMary) {
    console.log('Mike and John had a tie with a score of ' + avgJohn)
}
// console.log(`sdsdsd ${avgJohn} ${avgMike}`)