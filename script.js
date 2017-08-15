//Lecture: variables
/*
var name = 'Alastair';
console.log(name);

var lastName = 'Hardie';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log = (fullAge);
*/


//Lecture: variables 2
/*
var name = 'Alastair';
var age = '26';

//console.log(name + age);
//console.log(age+age);

var job, isMarried;

//console.log(job);

job = 'ProjectManager';
isMarried = false;

console.log(name + 'is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'twenty six';
job = 'developer';

console.log(name + 'is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + 'year old ' + job + '. Is he married? ' + isMarried + '.');
*/

//Lecture: operators
/*
var now = 2017;
var birthYear = 2017 - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageAlice = 26;
var ageAlastair = 26;

ageAlice = ageAlastair = (3 + 5) * 4 - 6;
//ageAlice = ageAlastair = 26

ageAlice++;
ageAlastair *= 2;

console.log(ageAlice);
console.log(ageAlastair);
*/

//Lecture : if/else statements
/*
var name= 'Alastair';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes'){
    console.log(name + ' is married!')
} else {
    console.log(name + ' will hopefully marry Alice someday!');
}*/
/*
}

isMarried = true;


if(isMarried) {
    console.log('Yes!');
} else {
    console.log('No');
}


if(isMarried) {
    console.log('Yes!');
}

if (23 === '23'){
    console.log('something');
}
*/

//Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log('Alastair is a teenager');
} else if (age >= 20 && age  <30) {
    console.log('Alastair is a young man');
} else {
    console.log('Alastair is a man');
}

var job = 'Project Manager';

job = prompt('What does Alastair do?');

switch (job){
    case 'Project Manager':
        console.log('Alastair manages projects');
        break;
    case 'Developer':
        console.log('Alastair has become a developer');
        break;
    case 'Superhero':
        console.log('Alastair fights baddies!');
        break;
    default:
        console.log('Alastair does something else');
}*/

//Coding Challenge - Branch CC1
/*
var ageAlastair =26;
var ageAlice =26;
var ageEd = 29;
var heightAlastair =182;
var heightAlice =135;
var heightEd = 190;

var scoreAlastair = heightAlastair + (ageAlastair * 5);
    console.log('Alastairs score is ' + scoreAlastair);

var scoreAlice = heightAlice + (ageAlice * 5);
    console.log('Alices score is ' + scoreAlice);

var scoreEd = heightEd + (ageEd * 5);
    console.log('Eds score is ' + scoreEd);

if (scoreAlice > scoreAlastair) {
    console.log('Alice is the winner with a score of ' + scoreAlastair);
} else if ( scoreAlastair === scoreAlice) {
    console.log('It is a draw!');
} else {
    console.log('Alastair is the winner with a score of ' + scoreAlastair);
}
//Three Players

if (scoreAlice > scoreAlastair && scoreAlice > scoreEd) {
    console.log('Alice is the winner with a score of ' + scoreAlice);
} else if (scoreAlastair > scoreAlice && scoreAlastair > scoreEd) {
    console.log('Alastair is the winner with a score of ' + scoreAlastair);
} else if (scoreEd > scoreAlice && scoreEd > scoreAlastair) {
    console.log('Ed is the winner with a score of ' + scoreEd);
} else {
    console.log('Everyone wins! It\'s a draw!');
}*/

// Lecture: functions
/*
function calculateAge(yearOfBirth){
    var age = 2017 - yearOfBirth;
    return age;
}

//var ageAlastair = calculateAge(1991);
//var ageDuncan = calculateAge(1982);
//var ageSteve = calculateAge(1983);
//    console.log(ageAlastair);

function yearsUntilRetirement(name,year){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + 'years.')
    } else {
        console.log(name + ' has already retired.')
    }
}
yearsUntilRetirement('Duncan',1982);
yearsUntilRetirement('Steve',1950);
yearsUntilRetirement('Alastair',1991);
*/

// Lecture: statements & expressions
/*
//expressions - they do something now
3 + 4;
var x = 3;

//statements - they don't do anything immediately
if (x ===5) {
    //do something
}
*/

//Lecture : arrays
/*
var names = ['Alastair', 'Rob', 'Chris'];
var years = new Array(1991, 1979, 1980);

console.log(names[0]);

names[0] = 'Alice';
console.log(names);

var alastair = ['Alastair', 'Hardie', 1991, 'Project Manager', false];

alastair.push('cobalt'); //adds a new element to the end of an array
alastair.unshift('Mr.'); //adds a new element at the beginning of the array
alastair.pop(); //this removes the last element from the array
alastair.shift(); //this removes the first element

console.log(alastair);

(alastair.indexOf('Hardie')); //finds out if an element is called in an array and indicates it's position

if (alastair.indexOf('Project Manager') === -1){ //indexOf also is outputted a -1 so the === -1 will return positive if they match
    console.log('Alastair is NOT a teacher');
}
*/


