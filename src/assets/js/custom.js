!!window['addEventListener'] && new WOW().init();


$('.prtnr_slider').slick({
	dots: false,
	arrow: false,
	autoplay: true,
	centerMode: false,
	prevArrow: '<button class="slick-prev" aria-label="Next" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	centerPadding: '0',
	slidesToShow: 6,
	slidesToScroll: 1,
	responsive: [{
	  breakpoint: 1200,
	  settings: {
		slidesToShow: 6
	  }
	},
	{
		breakpoint: 991,
		settings: {
		  slidesToShow: 4,
		}
	  },
	{
	  breakpoint: 769,
	  settings: {
		slidesToShow: 2,
	  }
	},
	{
	  breakpoint: 450,
	  settings: {
		slidesToShow: 1,
	  }
	}
	]
  });
	

$(document).ready(function($) {
var nav = $('header');
$(window).scroll(function() {
if ($(this).scrollTop() > 50) {
nav.addClass("hdr_fix");
} else {
nav.removeClass("hdr_fix");
}
});
});



/******29-4 */
$('.pchkrg_slider').slick({
	dots: false,
	arrow: false,
	autoplay: true,
	centerMode: true,
	 prevArrow: '<button class="slick-prev" aria-label="Next" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
	 nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
	centerPadding: '0',
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [{
	  breakpoint: 1200,
	  settings: {
		slidesToShow: 3
	  }
	},
	{
	  breakpoint: 992,
	  settings: {
		slidesToShow:3,
	  }
	},
	{
		breakpoint: 667,
		settings: {
		  slidesToShow: 2,
		}
	  },
	  {
		breakpoint: 575,
		settings: {
		  slidesToShow:1,
		}
	  }
	
	]
  });


