$(document).ready(function() {
        alert();
        $('.dropdown').hover(function(e) {
            $(this).toggleClass('show');
            $('.dropdown-menu').toggleClass('show');
        });
    });
    