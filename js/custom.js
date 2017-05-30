$( document ).ready(function() {

	var url = window.location.pathname,
	urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
	$('.nav-list .nav-item a').each(function() {
		if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
			$(this).addClass('active');
		}
	});

	$('.slider-main-page').slick({
		dots: false,
		infinite: true,
		arrows: true,
		prevArrow: '<button id="prev" type="button" class="btn-slider btn-prev"><i class="icon icon-slider-left"></i></button>',
		nextArrow: '<button id="next" type="button" class="btn-slider btn-next"><i class="icon icon-slider-right"></i></button>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				infinite: true,
				dots: true,
				arrows: false
			}
		}
		]
	});

	$("a.single_image").fancybox();


	$("#nav-toggle").click(function () {
		menuToggle();

	});

	function menuToggle() {
		$("#nav-toggle").toggleClass("active");
		$('.nav-list').slideToggle();
	}

	$(window).resize(function(){
		if ( $(window).width() <= 768 ) {
			$(".nav-cart").prependTo('.small-menu');
		} else {
			$(".nav-cart").appendTo('.nav-list');
		}
		$('.jobs-contact-popap').css({
			left: ($(window).width() - $('.jobs-contact-popap').outerWidth()) / 2 +'px',
			top: ($(window).height() - $('.jobs-contact-popap').outerHeight()) / 2 +'px'
		});
		$('.cart-modal').css({
			left: ($(window).width() - $('.cart-modal').outerWidth()) / 2 +'px',
			top: ($(window).height() - $('.cart-modal').outerHeight()) / 2 +'px'
		});
	});
	$(window).resize();	


	$('.apply-sv').click(function(e) {
		e.preventDefault()
		$('.jobs-contact-popap').fadeIn(300);
		$('.overlay').fadeIn(300);
	});
	$('.jobs-contact-popap .icon-close, .overlay').click(function() {
		$('.overlay, .jobs-contact-popap').fadeOut(300);
	});

	$('.cart-modal .icon-close, .overlay').click(function() {
		$('.overlay, .cart-modal ').fadeOut(300);
	});


	$('.btn-send').click(function(){
		$.ajax({
			// url: 'form_action.php',
			type: 'POST',
			dataType: 'html',
			// data: $('#form-contact').serialize(), 
			success: function(response) {
            // alert(response); // отправлено удачно
            $('.cart-modal').css({display: 'block'});
            $('.cart-modal').fadeIn(300);
            $('.overlay').fadeIn(300);
        // });
    },
    error: function(response) {
            // alert(response); // ошибка
        }
    });

	});

	$('.icon-cart-plus').click(function(event) {
		$this = $(this);
		var cart = $('.icon-cart-plus').closest('.product-quantity').val();
		console.log(cart);

	});

	$('.product-title').jTruncate({  
		length: 50,  
		moreText: "..",  
		lessText: '.',  
		moreAni: "10", 
		lessAni: 100
	});  
	$('.truncate_more_link').click(function() {
		$(this).closest(".clearboth .truncate_more_link").toggleClass("active");
	});

});



function getFileName () {
	var file = document.getElementById('uploade-file').value;
	file = file.replace(/\\/g, "/").split('/').pop();
	document.getElementById('file_name').innerHTML = 'Назва файлу: ' + file;
}