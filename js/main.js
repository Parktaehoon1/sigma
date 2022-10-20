$(document).ready(function () {
  // 모달창
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");

  modalClose.click(function () {
    modalWrap.stop().fadeOut(500);
    // 추가기능 : 스크롤바 살리기
    // $('html').css('overflow', 'auto');
  });
  let modalMain = $(".modal-main");
  //내용 배경 클릭
  modalMain.click(function (event) {
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  //전체 배경 클릭
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(500);
    // 추가기능 : 스크롤바 살리기
    // $('html').css('overflow', 'auto');
  });
  $("html").keydown(function (key) {
    if (key.keyCode == 13) {
      modalWrap.stop().fadeOut(200);
      $("html").css("overflow", "auto");
    }
  });
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
  // 헤더 관련
  let header = $(".header");
  let scY = $(window).scrollTop();
  let oldY;
  $(window).scroll(function () {
    scY = $(window).scrollTop();
    if (scY > 101) {
      header.addClass("hide");
      header.addClass("hide-white");
      $(".main-menu > li").addClass("hide-color-000");
      if (oldY - scY < 0) {
        // 아래로 스크롤
        header.addClass("hide-up");
      } else {
        // 위로 스크롤
        header.removeClass("hide-up");
      }
    } else {
      header.removeClass("hide-up");
      header.removeClass("hide");
      header.removeClass("hide-white");
      $(".main-menu > li").removeClass("hide-color-000");
    }
    oldY = scY;
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

  let swiperActive = $(".sw-tech .swiper-slide-active");
  let techList = $(".progress-bar-list li");
  var swiper = new Swiper(".sw-tech", {
    slidesPerView: "auto",
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
    on: {
      slideChangeTransitionStart: function () {
        // console.log(this.realIndex);
        techList.removeClass("progress-bar-list-active");
        techList.eq(this.realIndex).addClass("progress-bar-list-active");
      },
    },
  });

  console.log("실시간으로 감시하는지?", swiperActive);
  console.log(techList);
  $.each(techList, function (index) {
    // swiperActive.eq(index).
  });
});
