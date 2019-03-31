//array
//push(),pop(), length, typeof, isArray()

// arr = [1,2,3];
// arr2 = "ram";

// console.log("original array: " + arr);

// arr.shift();

// console.log(arr);

// var newarr1 = arr.unshift("ram", "shyam");

// console.log(newarr1.length);
// console.log("After unshift: \t" + newarr1);

// var arrayFirst = ["a", "b", "c"];
// var arraySecond = ["d", "e", "f"];
// var arrayThird = ["g", "h", "i"];

// var arrayFinal = arrayFirst.concat(arraySecond, arrayThird);

// // console.log(arrayFinal);

// //slice
// // console.log(arrayFinal.slice(1,3));
// // console.log(arrayFinal.slice(1));

// //splice 

// arrayFinal.splice(-3,-1, "ramesh");
// console.log(arrayFinal);

//decision statements

//if ...else
//switch

// var testArray = [1,2,3,4,5];

// var one = 1;
// var strOne = '1';

// if(one===strOne) {
//     console.log("equal");
// } else {
//     console.log("notEqual");
// }

// if(testArray.lenght ==10) {
//     console.log("lenght is 10");
// } else if (testArray >10) {
//     console.log("lenght is gt than 10");
// } else {
//     console.log("length is not known");
// }

//switch

// let hero = 'Superman';

// switch(hero.toLowerCase()) {
//     case 'superman':
//         console.log("super powered and god");
//         break;
//     case'batman':
//         console.log("fight and bat");
//         break;
//     default:
//         console.log("hero");
// }

// function sayHello(fName,lName) {
//     console.log("hello Programmers!!!"+" "+ fName +" "+ lName);
// }
// sayHello("Ravi", "Mathya");

/*function calculation(num1,num2, action) {
    if(action==='add') {
        console.log(num1+num2);
    }
    else if(action==='sub') {
        console.log(num1-num2);
    }
    else if(action==='mul') {
        console.log(num1*num2);
    }
    else {
        console.log("enter the valid operator")
    }
}
calculation(1,2,'add');

calculation(4,2,'sub');
calculation(7,4,'mul');
calculation(1,2);*/

/*for (let counter = 1; counter<5; counter++){
    console.log(counter);
}*/


/*let a = 10;
while (a>5) {
    console.log(a);
    a--;
}*/
/*let count = 2;



count>5?console.log("greater"):console.log("smaller");*/
//condition ? if true statement:else do statement


/*var a = 26;
function checkScope() {
    console.log(a++);
}

checkScope();
console.log(a);*/


/*//use of function expression with example of setTimeout function.
var String = "waited for 3 $";
console.log("Execution started");
setTimeout(function(){
    console.log(String);
},3000)*/


//10,9,8.....0 ----->>>>> Timeout

/*var counter = 10;

function counterTo() {
    setTimeout(function() {
        if(counter >=0) {
            console.log("counter :: " + counter--);
            counterTo();
        } else {
            console.log("Job DONE!!!");
        }
        
    },1000)
}

counterTo();*/


/*(function(){
    console.log("Nice");
})();*/

var time = 30;
var Minute = parseInt(time/60);
var Second = time%60;
function counterTo(){

    setTimeout (function() {
        if(Minute >=60) {
            if(Second >=0) {
                console.log("Minute : "+ Minute + " " + "Second : " + Second--);
                counterTo();
            } else {
                Minute--;
                Second = 60;
                counterTo();
            }
        }
        else if(Second >=0) {
            console.log("counter :: " + Second--);
            counterTo();

            

        } else {
                console.log("Job DONE!!!");

        }
        

    },1000)
}
counterTo();