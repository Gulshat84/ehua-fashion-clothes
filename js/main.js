$(document).ready(function () {
  var trendsTabsItem = $(".trends-tabs__item");
  var trendsContentItem = $(".trends-content__item");

  trendsTabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    trendsTabsItem.removeClass("trends-tabs__item--active");
    trendsContentItem.removeClass("trends-content__item--active");
    $(activeContent).addClass("trends-content__item--active");
    $(this).addClass("trends-tabs__item--active");
  });

  var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  
})
});