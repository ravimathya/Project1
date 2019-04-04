/* console.log(document);

document.title = "Title is new";

console.log(document.title);
//1. selector by id: document.getElementById

var footerEl = document.getElementById("my-footer");
console.log(footerEl);

console.log(footerEl.innerText); */

/* var aboutEl = document.getElementById("about-title-text");
//aboutEl.innerText = "About Us";

console.dir(aboutEl);
// console.log() */
//2. selector by class: document.getElementByclass

/* var testDivEl = document.getElementsByClassName("test-div");
console.dir(testDivEl);

console.log(testDivEl[2].innerText);


for(let i = 0; i<testDivEl.length; i++) {
    testDivEl[i].style.color = "red";
    testDivEl[i].style.borderBottom = "1px blue solid";
    // console.log(testDivEl[i].innerText);
} */


//3. querySelector(), querySelectorAll()


/* var cardsEl = document.querySelector('.card:last-child');
console.log(cardsEl); */


// parent child

/* var childEl = document.getElementById("testOne");
console.dir(childEl);

var parentEl = childEl.parentNode;

console.dir(parentEl.children); */

/* function handleBtnClick(el) {

    el.innerText = "Clicked";
    console.dir(el);
;} */

/* var clickBtn = document.getElementById("clickBtn");
var childEl = document.getElementById("testOne");

clickBtn.onclick = function() {
    childEl.style.color = 'red';
    childEl.style.fontWeight = 'bold';
    childEl.style.fontsize = '50px';
    console.log("CLickeeeeeeeeeeeeeeed");

    clickBtn.innerText= "Nicely changeed";

} */

//p, div, span, basically any html element

/* let d = document;

var newP = d.createElement("p");
//assign new class name to newly created paragraph element
newP.className = "normal";
//setting inner text of paragraph element
newP.innerText = "This is Append paragraph";
console.dir(newP);

//setting up new attribute and its value;

newP.setAttribute("id", "newID");


var newEl = d.getElementById("new_element");
newEl.appendChild(newP);

var textGemeratorBtn = d.getElementById("text-generator");
var generatedTextDiv = d.getElementById("generated-text");

textGenerator.onclick = function() {
    var newTextPara = document.createElement('p');
    newTextPara.innerText = "This is newly generated text.";
    generatedTextDiv.appendChild(newTextPara);
}

var dblClick = d.querySelector("doubleClickBtn");
doubleCliclBtn.ondblclick = function() {
    console.log(dblClick);
} */


var myInput = document.querySelector("#id_name");

var typedValue = document.querySelector("#typedValue");

myInput.onchange = function(e) {
    //e= our event fired = object
    //target is one of the property of event
    //target is also an object
    var result = e.target.value;
    var integerResult = parseInt(result);
    if(isNaN(integerResult)) {
        typedValue.innerText = "Please enter the valid number";
    }
    else {
        typedValue.innerText = result;

    }
    console.log(integerResult);
/*     console.log(e);
    console.log(e.target.value);
    console.log(typeof result) */

    // typedValue.innerText = result;
}