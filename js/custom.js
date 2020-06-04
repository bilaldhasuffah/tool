$('.order_summary_open').click(function() {
    $('.order-summary-container').fadeIn();
});

$('.order_summary_open3').click(function() {
    $('.order-summary-container').show();
});

$('.order_summary_open5').click(function() {
    $('.order-summary-container5').show();
});

$('.crt_new_dep').click(function() {
    $('.side-tool-wrap2').show();
    $('.crt_new_dep').hide();
});


$('.order_summary_open2').click(function() {
    $('.order-summary-container').fadeOut();
    $('.order-summary-container2').fadeIn();
});


$('.order_summary_open4').click(function() {
    $('.order-summary-container').hide();
    $('.order-summary-container2').show();
});

$('.order_summary_open6').click(function() {
    $('.order-summary-container5').hide();
    $('.order-summary-container6').show();
});



$('.order_summary_close').click(function() {
    $('.order-summary-container').fadeOut();
});

$('.order_summary_close5').click(function() {
    $('.order-summary-container5').hide();
});

$('.order_summary_close6').click(function() {
    $('.order-summary-container6').hide();
});


$('.order_summary_close3').click(function() {
    $('.order-summary-container').hide();
});


$('.order_summary_close2').click(function() {
    $('.order-summary-container2').fadeOut();
});

$('.order_summary_close4').click(function() {
    $('.order-summary-container2').hide();
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

// =============chart==============//
let chart = ()=>{

var chartData = {
   labels: ['Marketing','HR','Accounting','Sales','Researches'],
   datasets: [{
      label: "Reps",
      backgroundColor: "#0167FF",
      data: [5, 8, 3,5,8]
   }, {
      label: "Reps",
      backgroundColor: "#FF6B01",
      data: [10, 9, 7,9,6]
   }, {
      label: "Reps",
      backgroundColor: "#01B3FF",
      data: [10, 9, 7,5,4]
   }]
};
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data:chartData,

    // Configuration options go here
    options: {
            legend:{
                display:false
            },
            scales: {
                xAxes: [{
                    barPercentage: 0.9,
                    gridLines: {
                        color: ["rgba(1, 0, 0, 1)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)"],
                    },
                    categoryPercentage: 0.3,
                }],
    
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    }   
                }]
                
      }
    }
});


}

chart();