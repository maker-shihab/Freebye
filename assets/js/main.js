$(document).ready(function () {
  // Mobile menu
  $(".logo-bar").click(function () {
    $(".menu ul").slideToggle(1000);
 
    return false;
  });
  // Scroll TOP
  $(".back-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      }
    );
    return false;
  });
  $(".our-client").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
  });
  $(".trusted-commpany-item").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    nav: false,
    dots: false,
    responsive : {
      0 : {
        items: 2,
        margin: 10
      },
      480 : {
        items: 3,
        margin: 10
      },
      768 : {
        items: 4,
        margin: 10
      },
      1000 : {
        items: 5,
        margin: 10
      }
    }
  });
});
$(window).scroll(function () {
  var scrollValu = $(this).scrollTop();

  if (scrollValu > 150) {
    $(".back-top").show();
  } else {
    $(".back-top").hide();
  }
});