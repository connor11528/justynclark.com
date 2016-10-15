//jQuery(document).foundation();
/**
 * Created by justynclark on 9/3/16.
 */
jQuery(document).ready(function($) {
    /*Navigation*/
    $("a.x").click(function() {
        $(".nav-logo").toggleClass("open");
        $(this).toggleClass("open");
        $("#nav").toggleClass("open");
    });

    var lastScrollTop = 0;

    var timer;

    function shrink() {
        console.log('down');
        // scrolling down
        if ($('.x').data('size') === 'big' && !$('#nav').hasClass('open')) {
            $('.x').data('size', 'small');
            $('.x').removeClass('down').addClass('up');
        }
    }

    function grow() {
        if ($('.x').data('size') === 'small') {
            console.log('up');
            $('.x').data('size', 'big');
            $('.x').removeClass('up').addClass('down');
        }
    }

    $('.navicon-button').hover(function() {
            clearTimeout(timer);
        },
        function() {
            timer = setTimeout(function() {
                if ($(window).scrollTop() > 500 && !$('#nav').hasClass('open')) {
                    shrink();
                } else {
                    grow();
                }
            }, 0);
        }
    );

    $(window).scroll(function() {

        var st = $(this).scrollTop();

        clearTimeout(timer);

        if (st > lastScrollTop && $(window).scrollTop() > 500 && !$('#nav').hasClass('open')) {
            shrink();
        } else {
            grow();
        }
        lastScrollTop = st;
        timer = setTimeout(function() {
            if (st > 500 && !$('#nav').hasClass('open')) {
                shrink();
            }
        }, 3000);
    });

});

/*
These functions make sure WordPress
and Foundation play nice together.
*/

jQuery(document).ready(function() {

    // Remove empty P tags created by WP inside of Accordion and Orbit
    jQuery('.accordion p:empty, .orbit p:empty').remove();

	 // Makes sure last grid item floats left
	jQuery('.archive-grid .columns').last().addClass( 'end' );

	// Adds Flex Video to YouTube and Vimeo Embeds
  jQuery('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]').each(function() {
    if ( jQuery(this).innerWidth() / jQuery(this).innerHeight() > 1.5 ) {
      jQuery(this).wrap("<div class='widescreen flex-video'/>");
    } else {
      jQuery(this).wrap("<div class='flex-video'/>");
    }
  });

});
