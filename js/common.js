$(document).ready(function() {


//avatar

const $avatarInput = $('#avatar-input');
  const $avatarImg = $('#avatar-img');
  const $deleteBtn = $('#avatar-delete');

  const MAX_FILE_SIZE = 12 * 1024 * 1024; 
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

  $avatarInput.on('change', function (e) {
    const file = e.target.files[0];

    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      alert('Пожалуйста, выберите файл в формате JPG или PNG.');
      $avatarInput.val('');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert('Размер файла превышает 12 МБ.');
      $avatarInput.val('');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      $avatarImg.attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
  });

  $deleteBtn.on('click', function () {
    const defaultSrc = $avatarImg.data('default') || 'img/default-avatar.jpg';
    
    $avatarImg.attr('src', defaultSrc);
    
    $avatarInput.val('');
  });


	//кнопка sandwich
	$(".burger").click(function() {
		$(".menu-mobile").slideDown(200);
	});

		$(".menu-mobile__close").click(function() {
		$(".menu-mobile").slideUp(200);
	});

	//кнопка favorites
	$(".btn-specialist--favorite").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});


	    //datapicker

$('.datepicker').datetimepicker({
    format: 'd.m.Y',    
    formatDate: 'd.m.Y',
    dayOfWeekStart: 1,   
    timepicker: false,  
    closeOnDateSelect: true,
    scrollMonth: false,
    scrollInput: false
});

$.datetimepicker.setLocale('ru');

const baseConfig = {
    format: 'd.m.Y',    
    formatDate: 'd.m.Y',
    dayOfWeekStart: 1,   
    timepicker: false,  
    closeOnDateSelect: true,
    scrollMonth: false,
    scrollInput: false
};


$('#picker-from').datetimepicker({
    ...baseConfig,
    onShow: function(ct) {

        let maxDateVal = $('#picker-to').val();
        this.setOptions({
            maxDate: maxDateVal ? maxDateVal : false
        });
    }
});

$('#picker-to').datetimepicker({
    ...baseConfig,
    onShow: function(ct) {

        let minDateVal = $('#picker-from').val();
        this.setOptions({
            minDate: minDateVal ? minDateVal : false
        });
    }
});


//balance
$('.buttons-balance__btn').on('click', function(e) {
        e.preventDefault();

        $('.buttons-balance__btn').removeClass('active');
        $(this).addClass('active');

        var amount = $(this).find('span').text().trim();

        $('.item-form--balance input').val(amount);
    });

		$(".next-step-balance").click(function(e) {
		e.preventDefault();
		$(this).parents(".step-balance").fadeOut(0);
		$(this).parents(".step-balance").siblings(".step-balance").fadeIn(200);
	});

	//switcher
	$(".switcher").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});

	//td table
	$(".td-name").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().siblings().toggleClass("active");
	});

	//language
$(".header__language-value").on("click", function(e) {
  e.stopPropagation(); 
  $(".header__language-dropdown").slideToggle(200);
});
	$(document).on("click", function(e) {
  if (!$(e.target).closest(".header__language-dropdown").length) {
    $(".header__language-dropdown").slideUp(200);
  }
});


	//dropdown
$(".item-dropdown__head").on("click", function(e) {
  var $parent = $(this).closest(".item-dropdown");
  var $content = $(this).siblings(".item-dropdown__content");
  var isOpen = $parent.hasClass("active");

  $(".item-dropdown").not($parent).removeClass("active")
    .find(".item-dropdown__content").slideUp(200);

  $parent.toggleClass("active", !isOpen);
  $content.stop(true, true).slideToggle(200);
});

$(document).on("click", function(e) {
  if (!$(e.target).closest(".item-dropdown").length) {
    $(".item-dropdown").removeClass("active");
    $(".item-dropdown__content").slideUp(200);
  }
});

$(".item-dropdown__content .btn").on("click", function(e) {
	e.preventDefault();
    $(".item-dropdown").removeClass("active").find(".item-dropdown__content").slideUp(200);
});

$('.item-dropdown--sorting .btn').on('click', function (e) {
  e.preventDefault(); 

  var $dropdown = $(this).closest('.item-dropdown');
  var selectedText = $dropdown.find('input:checked').siblings('span').text().trim();

  if (selectedText) {
    $dropdown.find('.item-dropdown__head strong').text(selectedText);
  }
});

 //show password
    $('.show-password').on('click', function() {
        const $input = $(this).closest('.item-form').find('input');
        
        $(this).toggleClass('is-active');
        
        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text');
        } else {
            $input.attr('type', 'password');
        }
    });

	//слайдер

	$('.slider-hero').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		  autoplay: true,
  		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3333 8.16669L10.99 14.001L16.3333 19.8334" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6666 19.8333L17.01 13.999L11.6666 8.16665" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.slider-thumbs').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 6,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3333 8.16669L10.99 14.001L16.3333 19.8334" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6666 19.8333L17.01 13.999L11.6666 8.16665" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					variableWidth: true
				}
			}
		]
	});

		$('.slider-four').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 13L6 8L11 3" stroke="#1C1C1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L11 8L6 13" stroke="#1C1C1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true
				}
			}
		]
	});

	$('.slider-three').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="16" class="show-mobile" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 13L6 8L11 3" stroke="#1C1C1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg><svg width="15" class="hidden-mobile" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8484 7.42454H0.706276M7.77734 14.4956L0.706276 7.42454L7.77734 0.35347" stroke="#fff" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="16" class="show-mobile" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L11 8L6 13" stroke="#1C1C1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg><svg width="15" class="hidden-mobile" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-0.000755191 7.42458H14.1414M7.07031 0.353516L14.1414 7.42458L7.07031 14.4957" stroke="white" /></svg></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: true
				}
			}
		]
	});

	$('.slider-cards').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 13L6 8L11 3" stroke="#1C1C1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L11 8L6 13" stroke="#1C1C1E" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					arrows: true
				}
			}
		]
	});

		$('.slider-for').slick({
		arrows: true,
		dots: false,
		infinite: true,
		asNavFor: '.slider-nav',
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3333 8.16669L10.99 14.001L16.3333 19.8334" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6666 19.8333L17.01 13.999L11.6666 8.16665" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					
				}
			}
		]
	});

		$('.slider-nav').slick({
		arrows: false,
		dots: false,
		infinite: true,
		asNavFor: '.slider-for',
		focusOnSelect: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3333 8.16669L10.99 14.001L16.3333 19.8334" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6666 19.8333L17.01 13.999L11.6666 8.16665" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
				}
			}
		]
	});

	$('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $(this).find('video').each(function() {
        this.pause();    
        this.currentTime = 0; 
        this.controls = false;

        $(this).siblings('.video-main__play').fadeIn(200);
    });
});

	/*input file*/
	$("input[type='file']").change(function () {
		var filename_text = $(this).parent().find(".name-upload");
		var filename = $(this).val().replace(/.*\\/, "");
		filename_text.html(filename);
	});

	 //image upload

const PDF_ICON_URL = 'img/pdf-icon.png'; 

$('.image-upload__image, .image-upload .btn-main').on('click', function () {
    $(this).closest('.image-upload').find('.image-upload-input').click();
});

$('.image-upload-input').on('change', function () {
    const input = this;
    const $container = $(this).closest('.image-upload');
    const $img = $container.find('img');
    const $nameContainer = $container.find('.image-upload__name');

    if (input.files && input.files[0]) {
        const file = input.files[0];
        
        if ($nameContainer.length > 0) {
            $nameContainer.text(file.name);
        }

        if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
            $img.attr('src', PDF_ICON_URL).show();
            $container.addClass('is-pdf').removeClass('is-image');
        } else {
            const reader = new FileReader();

            reader.onload = function (e) {
                $img.attr('src', e.target.result).show();
                $container.addClass('is-image').removeClass('is-pdf');
            };

            reader.readAsDataURL(file);
        }
    } else {
        // Очистка при сбросе
        $img.attr('src', '').hide();
        $container.removeClass('is-image is-pdf');

        if ($nameContainer.length > 0) {
            $nameContainer.text('');
        }
    }
});

//steps registration
  function updateStepsUI(currentIndex) {
    var $steps = $('.step-registration');
    var totalSteps = $steps.length; 
    var currentStepNum = currentIndex + 1;
    
    $('.head-steps__count span').text(currentStepNum);
    
    var percent = Math.round((currentStepNum / totalSteps) * 100);
    $('.percent-progressbar').text(percent + '%');
    $('.progressbar-main__value').css('width', percent + '%');
    
    $('.name-steps__item').hide().eq(currentIndex).fadeIn(200);
  }

  $('.js-next-step').click(function(e) {
    e.preventDefault();
    var $currentStep = $(this).closest('.step-registration');
    var $nextStep = $currentStep.next('.step-registration');

    if ($nextStep.length) {
      $currentStep.fadeOut(0);
      $nextStep.fadeIn(200);
      
      var nextIndex = $nextStep.index('.step-registration');
      updateStepsUI(nextIndex);
    }
  });

  $('.js-prev-step').click(function(e) {
    e.preventDefault();
    var $currentStep = $(this).closest('.step-registration');
    var $prevStep = $currentStep.prev('.step-registration');

    if ($prevStep.length) {
      $currentStep.fadeOut(0);
      $prevStep.fadeIn(200);
      
      var prevIndex = $prevStep.index('.step-registration');
      updateStepsUI(prevIndex);
    }
  });

  $('.name-steps__item').hide().first().show();

//max length input
    function updateCharCount($input) {
        var maxLength = $input.attr('maxlength');
        
        if (!maxLength) return;

        var currentLength = $input.val().length;
        
        var $counter = $input.closest('.item-form').find('.count-input');
        
        if ($counter.length) {
            $counter.text(currentLength + '/' + maxLength);
        }
    }

    $('.item-form input[maxlength], .item-form textarea[maxlength]').each(function () {
        updateCharCount($(this));
    });

    $(document).on('input', '.item-form input[maxlength], .item-form textarea[maxlength]', function () {
        updateCharCount($(this));
    });

//tabs
 $('.tabs li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(".tab-pane").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);
  });

	  //video
$('.video-main').on('click', function () {
    const video = $(this).find('video').get(0);
    const playBtn = $(this).find('.video-main__play');

    if (video.paused) {
        video.controls = true;   
        video.play();
        playBtn.fadeOut(200);
    } else {
        video.pause();
        video.controls = false;  
        playBtn.fadeIn(200);
    }
});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
		closeExisting: true
	});


});

