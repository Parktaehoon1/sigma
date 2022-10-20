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
  let mainLogo = $(".main-logo > a");
  let scY = $(window).scrollTop();
  let requireTag = $(".require > a");
  let langTag = $(".lang > span");
  let mainMenu = $(".main-menu-title");

  header.mouseenter(function () {
    mainMenu.addClass("header-color-000");
  });

  header.mouseleave(function () {
    mainMenu.removeClass("header-color-000");
  });
  let mainMenuLi = $(".main-menu > li");
  $.each(mainMenuLi, function (index, item) {
    $(this).mouseenter(function () {
      mainMenu.eq(index).addClass("font-color-fff");
    });
    $(this).mouseleave(function () {
      mainMenu.eq(index).removeClass("font-color-fff");
    });
  });

  let subMenuLi = $(".sub-menu > li");
  let subMenuLiA = $(".sub-menu > li > a");
  console.log("submenuli", subMenuLi);
  $.each(subMenuLi, function (index) {
    $(this).mouseenter(function () {
      subMenuLiA.eq(index).addClass("font-color-submenu");
    });
    $(this).mouseleave(function () {
      subMenuLiA.eq(index).removeClass("font-color-submenu");
    });
  });

  let oldY;
  $(window).scroll(function () {
    scY = $(window).scrollTop();
    if (scY > 101) {
      header.addClass("hide-white");
      mainLogo.removeClass("main-logo-active");
      mainMenu.removeClass("font-color-fff");

      if (oldY - scY < 0) {
        // 아래로 스크롤
        header.addClass("hide-up");
        mainLogo.removeClass("main-logo-active");
        header.removeClass("header-active");
        // mainMenu.addClass("font-color-fff");
        requireTag.removeClass("require-active");
        langTag.removeClass("lang-active");
        $(".main-menu-title").addClass("header-color-000");
      } else {
        // 위로 스크롤
        header.removeClass("hide-up");
        // mainMenu.removeClass("font-color-fff");
        header.addClass("header-active");
        mainLogo.addClass("main-logo-active");
        requireTag.addClass("require-active");
        langTag.addClass("lang-active");
        // $(".main-menu-title").removeClass("header-color-000");
      }
    } else {
      header.removeClass("hide-up");
      header.removeClass("hide-white");
      header.removeClass("header-active");
      mainLogo.removeClass("main-logo-active");
      // mainMenu.addClass("font-color-fff");
      requireTag.removeClass("require-active");
      langTag.removeClass("lang-active");
      $(".main-menu-title").removeClass("header-color-000");
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
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
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
});
