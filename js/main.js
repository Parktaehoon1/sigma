$(document).ready(function () {

// goTop btn
let go_top = $(".gotop");
console.log(go_top);

$(window).scroll(function () {
  let temp = $(window).scrollTop();
  if (temp > 500) {
    go_top.addClass("gotop-show");
  } else {
    go_top.removeClass("gotop-show");
  }
});

// gotop 눌렀을 때 최상단으로 가는거
go_top.click(function () {
  $("html").stop().animate(
    {
      scrollTop: 0,
    },
    1000
  );
});



  let header = $(".header");
  new Waypoint({
    element: $(".header-point"),
    handler: function (direction) {
      if (direction == "down") {
        header.css("top", -120);
        header.addClass("hide");
      } else if (direction == "up") {
        header.css("top", 0);
        header.removeClass("hide");
      }
    },
    offset: "20%",
  });
  let scY = $(window).scrollTop(); // 스크린전체에서의 Y축의 값
  console.log("scY", scY);
  $(window).scroll(function () {
    let tempY = $(window).scrollTop(); // 스크롤을 내렸을떄 나타나는 Y축의 값
    console.log("tempY", tempY);

    let temp = header.hasClass("hide");
    /* 위 waypoint에서 스크롤을 내렸을때 hide라는 addClass를 주었기때문에  그 클래스 값으로 
        비교하여서 header를 올릴지 내릴지 정함*/
    if (temp == true) {
      if (tempY - scY > 0) {
        // 양수가 나오면 스크롤이 아래로 떨어진 의미.
        header.css("top", -120);
      } else {
        header.css("top", 0);
      }
    }
    scY = tempY;
  });


  new Swiper(".sw-visual", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      },
    },
  });

  var swiper = new Swiper(".sw-tech", {
    slidesPerView: 'auto',
    // spaceBetween: 60, // 슬라이드 사이 여백
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    speed: 500,
    loop: true,
    navigation: {
      nextEl: ".sw-tech-next",
      prevEl: ".sw-tech-prev",
    },

  });

  let swiperActive = $('.sw-tech .swiper-slide-active');
  let techList = $('.progress-bar-list li')
  console.log("실시간으로 감시하는지?",swiperActive)
  console.log(techList)
  $.each(techList, function(index){
    // swiperActive.eq(index).
  })
});

