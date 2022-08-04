$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// $(".accordion-item").on("click",function(){
//     $(".accordion-item").removeClass("border");
//     $(this).toggleClass("border")
// })


$(".customer-slider").slick({
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,

    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

})


new VenoBox({
    selector: '.my-video-links'
});


$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() >300){
      $(".menu").addClass("nav-scroll")
          }else{
              $(".menu").removeClass("nav-scroll") 
          }

if($(window).scrollTop() >600){
    $(".top-button") .fadeIn()
        }else{
          $(".top-button") .fadeOut()
        }

    })


    $(".top-button").click(function(){
        $("html,body").animate({
          scrollTop:0
        },1000)
        })