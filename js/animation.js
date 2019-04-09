$(document).ready(function () {
    $('#header').click(function () {
        // console.log('$this');
        // $('#body').hide('slow');
        // $('#body').toggle(5000);
        // $('#body').fadeOut('slow');
        $('#body').animate({
            height: '+=300px',
            opacity: '0.5',
            left: '30px'
        });
        // $('#body').slideUp('slow');
        // $('#body').slideToggle('slow');


    });

});