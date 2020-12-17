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
});