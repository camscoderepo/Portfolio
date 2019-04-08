$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});

$(document).ready(function() {
    var typed = new Typed(".typed", {
        strings: ["Coding Ninja", "Script Kiddie", "Autodictact"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    }); 

   var skillsTopOffset = $(".skillsSection").offset().top;

   $(window).scroll(function() {

       if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
        
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 3,
                size:152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

       }
   });
   $("[data-fancybox]").fancybox();

   $("#filters a").click(function() {
       $("#filters .current").removeClass("current");
       $(this).addClass("current");

       var selector = $(this).attr("data-filter");
       
       $(".items").isotope({
        filter: selector,
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
    });


    $("#navigation .navbar-brand a").click(function(e) {
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow")
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }

    // $(window).on("scroll", stickyNavigation);

    // function navAltText() {

    //     var section = $("section");
        
    //     if($(window).)
    // }


    //Highchart pie chart
    Highcharts.chart('container', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Skills Section'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Skill percentage',
            data: [
                ['Javascript', 45.0],
                ['HTML', 26.8],
                {
                    name: 'CSS',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['SQL', 8.5],
                ['Python', 6.2],
                ['PHP', 0.7]
            ]
        }]
    });

    //Vanta.JS background animation
    VANTA.BIRDS({
        el: "#birds",
        backgroundColor: 0xf7bff,
        //color1: 0xcf1d1d,
        //color2: 0xc0c033,
        wingSpan: 35.00,
        speedLimit: 9.00,
        quantity: 5.00,
        separation: 20,
        cohesion: 20
      })




});



