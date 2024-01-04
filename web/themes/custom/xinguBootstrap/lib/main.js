(function ($) {

    $(function () {

        // Fade toggle background with loading
        setTimeout(function () {
            $('.loader_bg').fadeToggle();
        }, 2000);

        // Carousel
        const $carousel = $('.default_group');

        $carousel.flickity();

        $('#block_publicacoes .carousel-indicators').on('click', '.button', function () {
            const index = $(this).index();
            $carousel.flickity('select', index);
        });

    })

})(jQuery);