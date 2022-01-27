$(function(){
    $(".chart").easyPieChart({
        size: 180,
        barColor: "#e74c3c",
        scaleColor: false,
        lineWidth: 11,

        
        
    })
     $('.js--wp-1').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
})
      /* Mobile navigation */
$(document).ready(function(){
    $(".menu").click(function(){
        $("ul").toggleClass("active")
    })
})

$(document).ready(function(){
	$('li').click(function(){
		var selectedClass = $(this).attr('data-rel');
		// console.log(selectedClass);
		$('.preview').fadeTo(50, 0);
		$('.preview > div').not('.' + selectedClass).fadeOut();
		setTimeout(function(){
		$('.' + selectedClass).fadeIn();
		$('.preview').fadeTo(50, 1);	
		}, 700)
	})
})

	$('a[href*=\\#]:not([href=\\#])').click(function(){
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length){
				$('html, body').animate({
					scrollTop: target.offset().top}, 1000);
			}
		}
	});

  $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated bounceInLeft');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });