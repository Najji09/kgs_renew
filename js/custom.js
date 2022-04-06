document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded');
  setInterval(function () {
    $('div.slide ul').animate({ left: '1200px' }, 300, function () {
      $('div.slide ul').append($('section ul li').eq(0));
      $('div.slide ul').css('left', 0);
    });
  }, 3000);
  $('ul.news-title li').click(function (e) {
    e.preventDefault();
    let index = $(this).index();
    $('ul.news-title li').removeClass('on');
    $(this).addClass('on');
    $('div.news-article ul').removeClass('on');
    $('div.news-article ul').eq(index).addClass('on');
  });
  $('ul.notice-title li').click(function (e) {
    e.preventDefault();
    let index = $(this).index();
    $('ul.notice-title li').removeClass('on');
    $(this).addClass('on');
    $('div.notice-article ul').removeClass('on');
    $('div.notice-article ul').eq(index).addClass('on');
  });
  $('nav dl dd ul li').mouseenter(function () {
    $(this).children('ul').stop().slideDown();
  });
  $('nav dl dd ul li').mouseleave(function () {
    $(this).children('ul').stop().slideUp();
  });
});
