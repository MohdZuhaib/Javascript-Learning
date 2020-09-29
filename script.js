/*************************** 
 * variables and Datatypes */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Cooper';
var age = 25;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'techaer';
console.log(job);

 Variable naming rules
var _3years = 3;      correct
var 3 years = 3;      Incorrect
var johnMark = 'john and Mark';
 var if = 23; Incorrect because if is a keyword 


// Variable mutation and type coercion

var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + job + '. Is he married? ' + isMarried)

/* Variable mutation i.e. changing variable value

job = 'driver';
age = 'twenty eight';
alert(firstName + ' is a ' + job + '. Is he married? ' + isMarried)

 var lastName = prompt('what is his last name?');
console.log(firstName)


// Basic operators
var dob, year, mark;
ageJohn = 28;
ageMark = 15
now = 2020;
// Math operators
dob = now - age;
console.log(firstName + ' DOB is ' + dob);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn == ageMark;
console.log(johnOlder)

// Type of operator (to tell type of variable ie boolean or int)
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older');
var x;
console.log(typeof x);



/********************************************
 * Operator precedence
 *********************************

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge; // it will work because - has higher precedence than > or <
console.log(isFullAge);
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8*4-6; 32-6
// 26
console.log(x, y);


// More assignments
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);*/


/******************
 * IF-Else statements
 

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'single') {
    console.log('John is single')
} else {
    console.log('John is married');
}

var isMarried = false;
if (isMarried) {
    console.log('Yes, he`s married')
} else {
    console.log('No,he ain`t married')
}*/

/**********************
 * Boolean Logic
 */

/**&& means and
 * || means or
 

var firstName = 'John';
var age = 30;
if (age < 13) {
    console.log(firstName + ' is a boy')
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man')
} else {
    console.log(firstName + ' is a grown up man')
}
*/
/********************
 * Ternary operators and switch statements
 * ****************************************
 
var firstName = 'John';
var age = 14;

// Ternary operators

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'Juice';
console.log(drink);

// alternative method

if (age >= 18) {
    var drink = 'beer'
    console.log('john drinks ' + drink)
} else {
    var drink = 'juice'
    console.log('johna drinks ' + drink)
}

// Switch statement

var job = 'instructor';
switch (job) {

    case 'teacher':
    case 'instructor':
        console.log(firstName + ' is a teacher');
        break;
    case 'business':
        console.log(firstName + ' is a businessman');
        break;
    case 'driver':
        console.log(firstName + ' drives taxi');
        break;
    case 'student':
        console.log(firstName + ' is a student');
        break;
    default:
        console.log(firstName + ' is a leech');
}



age = 25;

switch (true) {

    case age < 13: // here it will compare the result of condition with switch parameter like age < 13 = true will be compared with switch parameter ie true
        console.log(firstName + ' is a boy');
        break;
    case age > 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;

    default:
        console.log(firstName + ' is an uncle');

}

/****************************************************
 * Truthy and Falsy values and equality operator
 ***************************************

// Falsy values: undefined, null, 0, ''(empty string), NaN
//  Truthy values : NOT falsy values
// Example:

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined')
} else {
    console.log('variable ain`t defined')
}

// Equality operators
if (height == '23') { // == will compare just value even if one is string and other is number  will return true if value in string and number are same whereas === will check for data type too if 12 is no and string is '12'  will return false
    console.log('The == operator does type coercion');
}


/*************************************
 * Functions
 *********************
var age;

function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1996) //104
var ageMike = calculateAge(1907) //23
var agePeter = calculateAge(1987) // 33

console.log(`age of John is ${ageJohn} ; Age of mike is ${ageMike} ; Age of Peter is ${agePeter}`)

function retirement(age) {
    return 60 - age;
}


var jRetire, pRetire, mRetire;

var retire_Years_Mike = retirement(ageMike)
var retire_Years_Peter = retirement(agePeter)
var retire_Years_John = retirement(ageJohn)

if (ageJohn >= 60) {
    jRetire = '|| John is already retired'
} else {
    jRetire = `|| John will retire in ${retire_Years_John} years`
}
if (ageMike >= 60) {
    mRetire = '|| Mike is already retired'
} else {
    mRetire = `|| Mike will retire in ${retire_Years_Mike} years `
}
if (agePeter >= 60) {
    pRetire = '|| Peter is already retired'
} else {
    pRetire = `|| Peter will retire in ${retire_Years_Peter} years`
}


console.log(`${jRetire} ${mRetire} ${pRetire}`)

//                     What is function expression and statement          ????????????????????

/******************************************
 *  Function statements and expressions
 ************************************

// Function declaration :                                 // it is similar to func statement
// function whatDoYouDo(job,firstName){}                   // function expression is assigning a new func to a variable and func could be named or unnamed


//  Function Expression                                      // In function expression assigning unnamed function is recommended and whenever youre required to call it just call it by name of variable exaple is given below;
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids';
        case 'Businessman':
            return firstName + ' has a business of clothes';
        case 'Student':
            return firstName + ' is a student of MIET';
        case 'Engineer':
            return firstName + ' is a Sr. Engineer at Bosch';
        default:
            return firstName + ' does nothing';

    }
}

console.log(whatDoYouDo('Businessman', 'john'))


/**********************
 * Arrays
 

// Initializing new array

var names = ['John', 'David', 'Benjamin'];
var years = new Array(1992, 1990, 1982) //Another but rarerly used method

console.log(names)
console.log(names.length)
console.log(years)

// Mutating data (ie changing values)

names[2] = 'Franklin';
names[5] = 'Einstein' //We can add a value to an x location in array 
console.log(names)

// To add an element to the end :
names[names.length] = 'Tron'
console.log(names)
    // OR by this method:
names.push('Tim')
console.log(names)

// Adding different data types to a single variable:
var john = ['John', 'Brownie', 12, 'Fresher', 'designer'];
console.log(john);
john.push('unmarried');
john.unshift('Mr.')
console.log(john);


console.log(john);
console.log(john.indexOf(12));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner)

/*********************************************
 * Objects and Properties
 */

/* ---- Object literal----
var john = {
    firstName: 'John',
    lastName: 'Anderson',
    birthYear: 1996,
    family: ['sonu', 'monu', 'rinky', 'pinky'],
    job: 'carpenter',
    isMarried: true,
};

console.log(john.lastName);
var x = 'birthYear';
console.log(john[x]);

john.job = 'Teacher';
john['isMarried'] = 'Yes';
console.log(john.isMarried);

// New object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'pop';
jane.birthYear = 1902;
jane['job'] = 'kasai';
console.log(jane)
jane.hobbies = [`movies games cycling`]

// ---Object Methods---      (function stored in variable inside object)

var john = {
    firstName: 'John',
    lastName: 'Anderson',
    // age: function(num) {
    //     return 2020 - num;
    // },
    // console.log(`John's age is ${john.age(1995)}`)

    // Alternate method :
    birthYear: 1995,
    calcAge: function() {
        // return 2020 - this.birthYear;
        this.age = 2020 - this.birthYear;
    },

    family: ['sonu', 'monu', 'rinky', 'pinky'],
    job: 'carpenter',
    isMarried: true,

}
john.calcAge();
// john.age = john.calcAge();

/**************************************************
 * Loops & Iteration
 


// For loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

var John = [' ', 'John', 'Smith', 1990, 'Designer', false];

for (var i = 0; i < John.length; i++) {
    console.log(John[i]);
}


// While loop
var i = 0
while (i < John.length) {
    console.log(John[i]);
    i++;
}
*/

// Continue & Break statements

// var John = ['first', 'John', 'Smith', 1990, 'Designer', false, 'Teacher', " "];
// for (i = 0; i < John.length; i++) {
//     if (typeof John[i] != 'string') continue;
//     console.log(John[i]);
// }
// for (i = 0; i < John.length; i++) {
//     if (typeof John[i] != 'string') break; //We us {} within for loop or any loop when our body content is in multiple lines otherwise we write content in same line without brackets
//     console.log(John[i]);
// }

// // Looping backwards
// for (i = John.length - 1; i >= 0; i--) {
//     console.log(John[i]);
// }

/*******************************************************
 *                    Hoisting
 ******************************************************/



// Functions--
calculateAge(1995)

function calculateAge(year) {
    console.log(2020 - year);
} // Function is available to use before declaration 


// retirement(1968);

var retirement = function(year) {
        console.log(65 - (2020 - year));
    } // Function retirement cannot be used before declaration
    //  i.e. hoisting doesnt work for function expression



// Variables

console.log(age); // will give an error of undefined as it knows there will be age variable but dont have its value
var age = 23; // if we comment this then upper line will give error of undefined

function foo() {
    console.log(age); //this will give error of undefined
    var age = 65;
    console.log(age);
}
foo(); // This will give age of 65
console.log(age); // This will give age of 23 as 65 will remain inside foo()


// Lexical Scope--

// Function defined/ used within another function has access to vars of first funtion

var a = "Hello";
first();

function first() {
    var b = ' Hi!';
    second();


    function second() {
        var c = ' Hey!';
        console.log(a + b + c);
    }
}