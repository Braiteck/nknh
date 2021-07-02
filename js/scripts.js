$(() => {
	// Основной слайдер на главной
	if ($('.main_slider .swiper-container').length) {
		new Swiper('.main_slider .swiper-container', {
			loop: true,
			speed: 750,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			autoplay: {
				delay: 4000
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Карусель ссылок
	if ($('.links_carousel .swiper-container').length) {
		new Swiper('.links_carousel .swiper-container', {
			loop: false,
			speed: 500,
			watchSlidesVisibility: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 14,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 14,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 5
				},
				1279: {
					spaceBetween: 30,
					slidesPerView: 6
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight($(swiper.$el).find('.item'), $(swiper.$el).find('.slide').length)
					})
				},
				resize: swiper => {
					$(swiper.$el).find('.item').height('auto')

					setTimeout(() => {
						setHeight($(swiper.$el).find('.item'), $(swiper.$el).find('.slide').length)
					})
				}
			}
		})
	}


	// Верхнее сообщение
	$('.top_notice .close_btn').click(function (e) {
		e.preventDefault()

		$('.top_notice').slideUp(200)
	})


	// Ответ на комментарий
	$('.comment .reaply_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.data')

		if (!$(this).hasClass('active')) {
			$(this).addClass('active')
			parent.find('.add_answer').slideDown(300)
		} else {
			$(this).removeClass('active')
			parent.find('.add_answer').slideUp(200)
		}
	})


	// Информация по вакансии
	$('.vacancies .item .vacancy .name').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$(this).next().slideToggle(300)
	})


	// Моб. Меню
	$('header .menu_btn, .mob_header .mob_menu_btn').click(function (e) {
		e.preventDefault()

		$('body').addClass('menu_open')
		$('.mob_menu').addClass('show')
		$('.overlay').fadeIn(300)
	})


	$('.mob_menu > .close, .overlay').click(function (e) {
		e.preventDefault()

		$('body').removeClass('menu_open')
		$('.mob_menu').removeClass('show')
		$('.overlay').fadeOut(200)
	})


	$('.mob_menu .menu .item > a.sub_link').click(function (e) {
		const $dropdown = $(this).next()

		if ($dropdown.css('visibility') === 'hidden') {
			e.preventDefault()

			$('.mob_menu .menu .item > .sub_menu').removeClass('show')
			$dropdown.addClass('show')
		}
	})

	$('.mob_menu .menu .sub_menu a.sub_link').click(function (e) {
		e.preventDefault()

		const $dropdown = $(this).next()

		if ($dropdown.css('visibility') === 'hidden') {
			e.preventDefault()

			$('.mob_menu .menu .sub_menu .sub_menu').removeClass('show')
			$dropdown.addClass('show')
		}
	})


	// Моб. подвал
	if ($(window).width() < 1024) {
		$('footer .info .title.mob_spoler').click(function (e) {
			e.preventDefault()

			!$(this).hasClass('active')
				? $(this).addClass('active').next().slideDown(300)
				: $(this).removeClass('active').next().slideUp(200)
		})
	}
})