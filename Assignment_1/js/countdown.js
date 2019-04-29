function countDown(time) {
    //calculate minutes
    var min = Math.floor(time/60);
    //calculate second
    var sec = time-(min*60);

    //time out with 1 second delay

    setTimeout(function() {
        if (time>=0) {
            console.log(min + ":" + sec);
            countDown(--time);
        } else {
            console.log("Finsihed");
        }

    },1000);
}

//
countDown(62);