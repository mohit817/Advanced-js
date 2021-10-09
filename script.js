// Functional Constructors
/*
var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John',1990,'teacher');
var jane = new Person('Jane',1969,'designer');
var mark = new Person('John',1948,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object create method
/*
var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value:'Jane'},
    yearOfBirth: {value:1969},
    job: {value:'teacher'}
    
})
*/

// Primitives and Objects
/*
primitive types are immutable, objects only have an immutable reference, but their value can change over time
primitive types are passed by value. Objects are passed by reference
primitive types are copied by value. Objects are copied by reference
primitive types are compared by value. Objects are compared by reference
*/
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name : 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj ={
    name:'Jonas',
    city:'Lisbon'
};

function change(a,b){
    a = 30;
    b.city = 'San Francisco'
};

change(age,obj);

console.log(age);
console.log(obj);
*/

// First class function : Passing functions as an arguments
/*
var years = [1990,1948,1969,2009,1856];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

function isFullAges(el){
    return el>=18;
}

function maxHeartRate(el){
    
    if(el >= 18 && el <= 81 ){
        return Math.round(206.9 - (0.67 * el));        
    }else{
        return -1;
    }
    
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAges);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages,fullAges,rates);
*/

// First class functions : Functions returning functions
/*
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what this UX design is?');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach ' + name + ' ?');
        }
    }else{
        return function(name){
            console.log('Hey ' + name + 'what do you do ?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

teacherQuestion('Mark');
teacherQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Jane');

interviewQuestion('designer')('Mark');
*/

// IIFE immediately invoked functional expression
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();


(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);    
})(5);
*/

// Closures
/*
function retirement(retirementAge){
    var a = ' years left until retirement.'
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) +  a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
retirement(66)(1990);

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){        
            console.log(name + ', can you explain what this UX design is?');        
        }else if(job === 'teacher'){        
            console.log('What subject do you teach ' + name + ' ?');
        }else{        
            console.log('Hey ' + name + 'what do you do ?');
        }
    }    
}

interviewQuestion('designer')('John');
*/

// Bind call Apply
/*
var john ={
    name:'John',
    age : 35,
    job: 'designer',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen. I\'m '+ this.name + ' I\'m a ' + this.job + ' I\'m a ' +  this.age + 'years old.' );
        }else if( style === 'friendly'){
            console.log('Hey Whats Up ! I\'m '+ this.name + ' I\'m a ' + this.job + ' I\'m a ' +  this.age + ' years old. Have a good '+ timeOfDay ); 
            
        }
    }
}

john.presentation('formal','Morning');

var emily = {
    name:'Emily',
    age:27,
    job: 'teacher'
};

john.presentation.call(emily,'friendly','Afternoon');

john.presentation.apply(emily,['friendly','Afternoon']);

var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('evening');
var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('evening');

var years = [1990,1948,1969,2009,1856];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

function isFullAges(limit,el){
    return el >= limit;
}

function maxHeartRate(el){
    
    if(el >= 18 && el <= 81 ){
        return Math.round(206.9 - (0.67 * el));        
    }else{
        return -1;
    }
    
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages,isFullAges.bind(this,20));
console.log(fullJapan);
console.log(ages);
*/

// coding challenge solution

function Question(question,answer,correct){
    this.question = question;
    this.answer= answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
     
    console.log(this.question);
    for(var i = 0; i < this.answer.length;i++){
        console.log(i + ' : ' + this.answer[i]);
    } 
}
 
 

Question.prototype.displayAnswer = function(ans){
     
    if(ans === this.correct){
        console.log('Well done! you give the correct answer.');
    }else{
        console.log('Try it again');
    }
}

 

var question1 = new Question('Is Javascript the coolest programming language in the world?', 
                                                                      ['Yes','No'],
                                                                        0);
var question2 = new Question('What is the name of the course\'s teacher?', 
                                                                      ['John','Michael','Jonas'],
                                                                        2);
var question3 = new Question('What does best describe coding?', ['Boring','Hard','Fun','Tedious'],
                                                                        2);
     
    
function nextQuestion(){
var questions = [question1,question2,question3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();
     

var answerPrompt = parseInt(prompt('Write the correct answer'));
    
    if(answerPrompt !== 'exit'){
        questions[n].displayAnswer(answerPrompt);  
        
        nextQuestion();
    }
}
    nextQuestion();

    


























































































