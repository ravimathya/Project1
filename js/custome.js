/* //learning jQuery
//&($selector).action()
var $container = $('.container');
//var container = document.querySelector(".container")

console.log($container); */

//by using below function  code we can use js where ever we want.

// $(document).ready(function() {
//     //do stuffs here.  
//     var $clickMeNowBtn = $("#clickMeNow");
//     console.log($clickMeNowBtn);

//     /* 
//     .click()
//     .dblclick()
//     .hover()
//     .mouseenter()
//     .mouseleave()
//     .hide()
//     .show()
//     .togge()
//     .on()
//     .css()
//     .addClass();
//     .removeClass()
//     .toggleClass()

//      */
// /*     $clickMeNowBtn.click(function() {
//         console.log("you clicked me:", $(this));
//         // $(red).hide();
//         $(red).toggle();
//         $('#about-title-text').css({
//             "color": "red",
//             "font-weight": "bold",
//             "text-decoration" : "none"

//         });

//     });
// }); */

// $('#clickMeNow').on({
//     click : function(){
//         console.log("clicked");
//         //
//     },
//     dblclick: function() {
//         console.log("Dbl Clicked");
//         //
//     },
//     mouseenter : function() {
//         $(this).css("color", "red");
//         console.log("Mouse enter");
//         //
//     },
//     mouseleave : function() {
//         $(this).css("color", "black");
//         console.log("Mouse leave");
//         //
//     }
// });

// });


$('#raviBtn').addClass('normal').on({
    mouseenter : function() {
        $(this).removeClass('normal').addClass('active');
        console.log("mouse Entered");
    },
    mouseleave : function() {
        $(this).addClass('normal').removeClass('active');
        console.log("mouse leave");

    }
});


var addRemoveText = document.querySelector("#addRemoveText");
var addRemoveTextBtn = document.querySelector("#addRemoveTextBtn");

/* $('#addRemoveTextBtn').on({
    mouseenter : function() {
        addRemoveText.innerHTML = '<div><p>Text is added....</p></div>';
    },
    mouseleave : function() {
        addRemoveText.innerHTML = '';

    }

}); */

/* 
//using normal js
$('#addRemoveTextBtn').hover(function() {
        addRemoveText.innerHTML = '<div><p>Text is added....</p></div>';
});
$('#addRemoveTextBtn').mouseleave(function() {
    addRemoveText.innerHTML = '';
}); */

$('#addRemoveTextBtn').hover(function() {
    $('#addRemoveText').html('<div><p>Text is added....</p></div>');
});
$('#addRemoveTextBtn').mouseleave(function() {
    $('#addRemoveText').empty();
});
