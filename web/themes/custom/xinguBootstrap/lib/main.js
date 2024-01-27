(function ($) {

    $(function () {

        // Fade toggle background with loading
        setTimeout(function () {
            $('.loader_bg').fadeToggle();
        }, 500);

        // Flickity Carousel Observatorio
        if (document.querySelector('#block_publicacoes')) {

            const $carousel = $('#block_publicacoes .default_group');

            $carousel.flickity();

            $('#block_publicacoes .carousel-indicators').on('click', '.button', function () {
                const index = $(this).index();
                $carousel.flickity('select', index);
            });
        }

        // Popover for Xingu
        $('[data-bs-toggle="popover"]').popover({
            html: true,
            content: function(e) {
                return $('.popover-markup-' + e.dataset.id).html();
            },
            trigger: 'hover',
            placement: 'top',
            container: 'body',
        });

        $('.mapitemlist > a').hover(
            function (e) { $('.map-popover[data-id="' + e.currentTarget.dataset.id + '"]').popover('show') },
            function (e) { $('.map-popover[data-id="' + e.currentTarget.dataset.id + '"]').popover('hide') }
        );
        // ./ End popover

    })

})(jQuery);