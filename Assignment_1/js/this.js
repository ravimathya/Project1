//This is Glovbal
var car = {
    name: "BMW",
    year: 2015,
    printDetail: function() {
        console.log(this.name + this.year);
    }
}

function fullname() {
    var fullname = (this.fName + " " + this.lName)
    console.log(this.fName + " " + this.lName);

}

var customerOne = {
    fName: "Ram",
    lName: "Sharma",
    print: fullName
}

var customerTwo = {
    fName: "Hari",
    lName: "Sharma",
    print: fullname
}

customerOne.print();
customerTwo.print();