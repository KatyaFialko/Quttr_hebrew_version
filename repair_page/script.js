$('.sl-home').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next'),
    prevArrow:('.prev'),
    responsive: [
        {
          breakpoint:376,
          settings: {
            arrows:false,
          }
        }
      ]
    
});
$('.sl-home1').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next1'),
    prevArrow:('.prev1'),
    responsive: [
        {
          breakpoint:376,
          settings: {
            arrows:false,
          }
        }
      ]
});
$('.sl-home2').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next2'),
    prevArrow:('.prev2'),
    responsive: [
        {
          breakpoint:376,
          settings: {
            arrows:false,
          }
        }
      ]
});
$('.sl-home3').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.next3'),
    prevArrow:('.prev3'),
    responsive: [
        {
          breakpoint:376,
          settings: {
            arrows:false,
          }
        }
      ]
});
// MODAL WINDOW -----------------------------
// open with button
$('.modal-btn').click(function () {
    $('main').css('filter', 'blur(7px)');
    $('.overlay-suggest').fadeIn();
    $('.overlay-suggest').addClass('disabled');
});
// close with button
$('.suggest-close').click(function () {
    $('.overlay-suggest').fadeOut();
    $('main').css('filter', 'none');
});



