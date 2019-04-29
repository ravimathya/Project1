function countDown(time) {

    //conveting minute into second
    time = time*60;
    //calculating hour
    var hour = Math.floor(time/3600);
    //calculate minutes
    var min = (time/60)-(hour*60);
    //calculate second
    var sec = time-(hour*3600)-(min*60);
    // console.log(sec);
    //time out with 1 second delay

    setTimeout(function() {
        if (time>=0) {
            console.log(hour + ":" + min + ":" + sec);
            time=time/60;
            countDown(--time);
        } else {
            console.log("Finsihed");
        }

    },1000);
}

//
countDown(121);