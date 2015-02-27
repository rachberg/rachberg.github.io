var main = function() {
    $('.icon-menu').click(function () {
        $('.menu').animate({left: '0px'}, 200);
        $('body').animate({left:'0px'}, 200);
    });
    
    $('.icon-close').click(function() {
        $('.menu').animate({
            left:'-285px'
        }, 200);
        
        $('body').animate({
            left:'0px'
        }, 200);
    });
};

function myFunction() {
    window.open("http://www.w3schools.com");
}

$(document).ready(main);