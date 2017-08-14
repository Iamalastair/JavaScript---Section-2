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

var ageAlastair =(26);
var ageAlice =(23);
var ageEd = (29);
var heightAlastair =(182);
var heightAlice =(135);
var heightEd = (165);

var scoreAlastair = heightAlastair + (ageAlastair * 5);
    console.log('Alastairs score is ' + scoreAlastair);

var scoreAlice = heightAlice + (ageAlice * 5);
    console.log('Alices score is ' + scoreAlice);

var scoreEd = heightEd + (ageEd * 5);
    console.log('Eds score is ' + scoreEd);

var winningScore = (312);

if (scoreAlice >= winningScore) {
    console.log('Alice is the winner with a score of ' + scoreAlastair);
} else if ( scoreAlastair >= winningScore && scoreEd >= winningScore) ; {
    console.log('It is a draw!');
} else {
    consolo.log('the winnie is someone else');
}


