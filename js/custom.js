$('.order_summary_open').click(function() {
    $('.order-summary-container').fadeIn();
});

$('.order_summary_open2').click(function() {
    $('.order-summary-container').fadeOut();
    $('.order-summary-container2').fadeIn();
});



$('.order_summary_close').click(function() {
    $('.order-summary-container').fadeOut();
});

$('.order_summary_close2').click(function() {
    $('.order-summary-container2').fadeOut();
});



$('.navbar_image').click(function() {
    $('.mini-profile').toggleClass('show');

});


$('.all-tools-menu').click(function() {
    $('.tool-menu').toggleClass('show');
});

$('#side-menu-btn').click(function(){
    $('.sidebar').toggleClass('show');
});

$('.profile-close-btn').click(function() {
    $('.mini-profile').hide();

});