// 슬라이드
  var menu = ['납작 복숭아 신메뉴 마시면, 스탬프 X3', '납작복숭아 신메뉴', '그릭요거트 신메뉴','베스트콤비네이션']
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // renderBullet: function(index, className){
      //   return '<span class="' + className + '">' + (menu[index]) + '</span>';
      // },
    },
  });
