// burger-menu:

$(document).ready(function () {

    $(".header__burger").click(function () {

        $(".wrap").fadeIn('fast');
        $(".header__burger").fadeOut()
        $(".cross_burger").fadeIn();
    });

    $(".wrap").click(function () {
        $(".cross_burger").fadeOut('fast');
        $(".wrap").fadeOut('slow');
        $(".header__burger").fadeIn();


    });


    // slider:

    let slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: false,
        navPosition: 'bottom',
        speed: 1200,
        autoplayTimeout: 5000
    });

    // modal windows
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation, .modal').fadeIn('fast')
    });

    $('.modal__close').on('click', function () {
        $('.modal, .overlay').fadeOut('fast')
    });


    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('fast')
        })
    })

    // validation forms

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Укажите свое имя!",
                    minlength: jQuery.validator.format("Введите не менее {0} букв!")
                },
                phone: "Введите корректный номер",
                email: {
                    required: "Введите корректную почту",
                    email: "Ваша почта неккоректна"
                }
            }
        });
    };

    validateForm('#consultation-form');

    // mask for phone in forms

    $('input[name=phone').mask("+38 (099) 999-99-99");

});
