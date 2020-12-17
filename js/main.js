$(document).ready(function () {
  var trendsTabsItem = $('.trends-tabs__item');
  var trendsGridItem = $('.trends-grid__item');

  trendsTabsItem.on('click', function (event) {
    var activeContent = $(this).attr("data-target");
    trendsTabsItem.removeClass("trends-tabs__item--active");
    trendsGridItem.removeClass("trends-grid__item--active");
    $(activeContent).addClass("trends-grid__item--active");
    $(this).addClass("trends-tabs__item--active");
  });
});