var students = [
    {
        name: "Ram",
        college: "ktm",
        dob: "123235"
    },
    {
        name: "Rame",
        college: "ktmd",
        dob: "123235"
    },
    {
        name: "Ramesh",
        college: "ktmdo",
        dob: "123235"
    }
];

//array.map()
//second = current index, third=array under evaluation
//JSON format

/* students.map(function(student, index , array) {
    console.log(index + " " + student.name);

});

var mappedData = students.map(function(student){
    return student.dob;
})

var arrayOne = [1,2,3,4,5];
var square = arrayOne.map(function(arr) {
    return arr**2;
})
console.log(square);
console.log(mappedData); */



/* var studentList = document.querySelector("#student_list");

students.forEach(function(student ,index) {
    var listEl = document.createElement("li");
    listEl.innerText = `${index + 1} ${student.name}`;
    studentList.appendChild(listEl);
}); */


/* //using long form by using innerText
var studentTableBody = document.querySelector("#student-table");
students.forEach(function(student ,index) {
    var tableTr = document.createElement("tr");
    var tableTd1 = document.createElement("td");
    tableTd1.innerText = index +1;
    var tableTd2 = document.createElement("td");
    tableTd2.innerText = student.name;
    var tableTd3 = document.createElement("td");
    tableTd3.innerText = student.college;
    var tableTd4 = document.createElement("td");
    tableTd4.innerText = student.dob;
    tableTr.appendChild(tableTd1);
    tableTr.appendChild(tableTd2);
    tableTr.appendChild(tableTd3);
    tableTr.appendChild(tableTd4);
    studentTableBody.appendChild(tableTr);

}) */

/* var forInnerHTML = document.querySelector("#forInnerHTML");
forInnerHTML.innerHTML = "<h3> This is inserted HTML</h3> <p> This is inserted HTML paragraph</p>";
 */
students.forEach(function(student, index) {
    //creating li for each student
    //let listEl = doument.createElement("li");

    studentTable.innerHTML = `
    <tr>
    <td>${index+1}</td>
    <td>${student.name}</td>
    <td>${student.college}</td>
    <td>${student.dob}</td>
    </tr>`
})
