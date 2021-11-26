//task1
//Declare variables which should hold data of following types. You may assign some value according to variable type to the variables.

//integer 
let inum = 12;
//float
let fnum = 34.25;
//boolean
let bval = true;
//string
let str = "Assalamualaikum";
//date
let date = new Date();
//undefined
let undef;
//integer array
const iarr = [1,2,3,4,5,6];
//string array
const sarr = ["Assalamualaikum","habibi","mashaallah","subhanallah"];
//mixed  array
const marr = [1,"habibi",3,"salam",5,7];
//object
let object = {id:1, Name:"ABC"};

/*******************************************************************************************/
//task2
//Provide different inputs to following functions in given code and see what they return

//Number function
var num = Number("123");
console.log(num);
//NaN
var num1 = Number("123abc");
console.log(num1);
//parseInt fuction
var num2 = parseInt("123abc");
console.log(num2);
//NaN
var num3 = parseInt("abc123");
console.log(num3);
//parseFloat function
var num4 = parseFloat("123.34abc");
console.log(num4);
//NaN
var num5 = parseFloat("abc123.34");
console.log(num5);

/*******************************************************************************************/
//task3
//function which checks and prints only the string type properties of an object

function showStringProp(Obj){
    for(let i in Obj)
    {
        if(typeof(Obj[i]) === 'string')
        {
            console.log(i , ":" , Obj[i]);
        }
    }
}
//object 
const object = {
    name: 'Waheed',
    age: 20,
    country: 'Pakistan',
}
//calling with function
showStringProp(object);

/*******************************************************************************************/
//task4
//function which checks number till given input/parameter is odd or even

function checksEvenOdd(num)
{
    for(var i=1;i<=num;i++){
        let result = (i%2==0 ? 'Even' : 'Odd');
        console.log(i ,':', result);
    }
}
//calling
checksEvenOdd(10);

/*******************************************************************************************/
//task5
/*
Write a function which checks given input/parameter:
• If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'
• If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print => 'Speed Limit Crossed by Penalty Point' + Point
• If Driver gets more than 10 penalty points ie. above the speed limit 120, print => 'License Suspended'
*/
function speedLimitCheck(speed){
    if(speed <= 70){
        console.log('Good Safe Driving');
    }
    else{
        let p = Math.floor((speed-70)/5);
        if(p<10){
            console.log('Speed Limit Crossed by Penalty Point: ',p);
        }
        else{
            console.log('License Suspended');
        }
    }
}
//checking
speedLimitCheck(50);
speedLimitCheck(70);
speedLimitCheck(90);
speedLimitCheck(120);

/*******************************************************************************************/
//task6
//Write an arrow function which calculate the sum of marks provided in an array, average it and also show Grade. Follow Grading Policy.

marksCalculation = (marks) => {
    var sum=0;
    var avg=0;
    var grade;
    for(var i in marks){
        sum+=marks[i];
    }
    avg = sum/marks.length;
    if(avg<100 && avg >=90){
        grade = 'A1 Grade'
    }
    else if(avg<90 && avg >=80){
        grade = 'A Grade'
    }
    else if(avg<80 && avg >=70){
        grade = 'B Grade'
    }
    else if(avg<70 && avg >=60){
        grade = 'C Grade'
    }
    else if(avg<60 && avg >=50){
        grade = 'D Grade'
    }
    else{
        grade = 'Fail';
    }
    console.log('Total marks: ',sum);
    console.log('Average marks: ',avg);
    console.log(grade);
}
//calling
marksarr = [60,70,50,80,77,87];
marksCalculation(marksarr);

/*******************************************************************************************/
//task7
//anonymous program to reverse a string

let reverseString = function(str){
    for(var i=str.length-1; i>=0;i--){
        console.log(str[i]);
    }
}
//calling
reverseString('abcd');
/*******************************************************************************************/
//task8
//function which returns a list of elements which contains at least one character as digit

function list(){
    return [1,2,3,4,5,Number('123'),68,99];
 }
 //testing
 list()
/*******************************************************************************************/
//task9
//function which accepts two valid dates and returns the difference between them as number of days

// a and b are javascript Date objects
function dateDiff(a,b){
    var result;
    const MinPerDay = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information
    const d1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const d2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    console.log('Difference is: ',(Math.floor((d2 - d1) / MinPerDay)),'days.');
}
// test it
const a = new Date("2018-01-01");
const b = new Date("2018-08-15");
dateDiff(a, b);

/*******************************************************************************************/
//task10
//function which can check if a given object is empty or not. If not empty, then display all the keys as well as values of an object. (Also values of nested objects)

function isObjEmpty(obj){
    for(var key in obj) {
        if(obj.hasOwnProperty(key)){
            console.log(key,':',obj[key]);
        }
        else{
            console.log('Object is empty');
        }
    }
}
//testing
const obj = {
    name: 'Waheed',
    age: 20,
    country: 'Pakistan',
}
isObjEmpty(obj);

/*******************************************************************************************/
//task11
//Find the number of occurrences of minimum value in the numbers list and replace all the occurrences with -1 value.

function smallestNoOcc(arr){
    var min = arr[0];
    let occ = 1;
    for(let i=1;i<arr.length-1;i++){
        //if current element is smaller than firstly selected
        if(arr[i]<min){
            min = arr[i];
            occ = 1;
            arr[i] = '-1'
        }
        //if current element is equal than firstly selected
        if(arr[i]==min){
            occ++;
            arr[i] = '-1';
        }
    }
    console.log('Occurance number: ',occ);
}
//testing
let arr = [1,2,3,4,5,2,7];
smallestNoOcc(arr);
/*******************************************************************************************/