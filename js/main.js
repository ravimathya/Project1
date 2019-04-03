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


var cardsEl = document.querySelector('.card:last-child');
console.log(cardsEl);