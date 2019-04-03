//bojects literals
var car = {
    name: 'BMW', //Property
    year: 2010, //property
    madeIn: 'USA', //property
    parts: {
        name: "Engine",
        type: "solid",
        condition: "ok",
        renewed: true,
        priceDetail: function () {
            console.log("engine detail");
        }
    },
    getDetail: function () {
        //this = car
        console.count(this.name + "was made in" + this.madeIn + "in" + this.year);
    }, //method

    getMadeIn: function () {
        return this.madeIn;
        //var madeIn = car getMadeIn()
    }
}
//to access this object properties and method
//we use member access operator "." (dot)
//console.log()

// console.log(car.name, car.year, car.getDetail());

console.log(car.name, car.year, car.getDetail());
console.log(car.name, car.parts);
car.name = "Ramesh";

car['name'] = "Ram";

car['build'] = 'Meta';

car.hero = "nice";
// console.log(car);
console.log(car['newProperty']);
console.log(car.newProperty);


var anotherCar = {
    name: "Toyota",
    yera: 2010,
    parts: [{
            name: "Engine",
            serviced: true
        },
        {
            name: "clutch",
            serviced: false
        }
    ],
    printDetail: function () {
        console.log(this.name)
    }
}

console.log(anotherCar.parts[1].name);