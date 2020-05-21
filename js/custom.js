$('.order_summary_open').click(function() {
    $('.order-summary-container').fadeIn();
});

$('.order_summary_close').click(function() {
    $('.order-summary-container').fadeOut();
});

$('.navbar_image').click(function() {
    $('.mini-profile').toggleClass('show');

});


$('.all-tools-menu').click(function() {
    $('.tool-menu').toggleClass('show');
});