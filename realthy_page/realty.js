$('.button-mobile').click(function(){
    $(".read-more").fadeToggle(400);
});

// Sliders
$('.sl-home').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,   
    variableWidth: true,
    centerMode: true,
    arrows: true,
    nextArrow:('.prev'),
    prevArrow:('.next'),
    responsive: [
        {
            breakpoint: 376,
            settings: {
                slidesToShow:1,
                arrows:false
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
    nextArrow:('.prev1'),
    prevArrow:('.next1'),
    responsive: [
        {
            breakpoint: 376,
            settings: {
                slidesToShow:1,
                dots: true,
                arrows:false
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
    nextArrow:('.prev2'),
    prevArrow:('.next2'),
    responsive: [
        {
            breakpoint: 376,
            settings: {
                slidesToShow:1,
                dots: true,
                arrows:false
            }
        }
    ]
});
// Questions
function DropDown(el) {
    this.wrapper = el;
    this.placeholder = this.wrapper.children('span');
    this.opts = this.wrapper.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        let obj = this;

        obj.wrapper.on('click', function(event){
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click',function(){
            let opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(function() {

    let wrapper = new DropDown( $('#wrapper') );

    $(document).click(function() {
        $('.wrapper').removeClass('active');
    });
});

let convenient = document.getElementById('convenient');
let arrow = document.getElementById('arrow');

convenient.addEventListener('click', function () {
    convenient.style.opacity = '1';
    arrow.classList.toggle('rotate');
});
arrow.addEventListener('click', function () {
    convenient.style.opacity = '1';
    arrow.classList.toggle('rotate');
});