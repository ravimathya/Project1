var myInput = document.querySelector("#id_name");

var typedValue = document.querySelector("#typedValue");

myInput.onchange = function(e) {
    //e= our event fired = object
    //target is one of the property of event
    //target is also an object
    var result = e.target.value;
    for(let i = 0;i<length.result;i++) {
        console.log(result[i]);
/*         if(isNaN(result[i])) {
            typedValue.innerText = "Please enter the valid number";
        }
        else {
            typedValue.innerText = result;
    
        } */

    }
    /* var integerResult = parseInt(result);
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

    // typedValue.innerText = result; */
}