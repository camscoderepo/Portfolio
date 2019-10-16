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
    //typed plugin types words on its own
    var typed = new Typed(".typed", {
        strings: ["Coding Ninja", "Gaming Enthusiast", "Autodidact"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
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

    //navigation sticky top on scroll
    $("#navigation li a").click(function(e) {
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


    //Highchart pie chart (skills chart)
    Highcharts.chart('container', {
        chart: {
            backgroundColor: '#fefbd8',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
            
        },
        title: {
            text: 'Language Pie Chart'
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

    
    
    
    const getRepoNames = async () =>
{
    try{
        const response = await fetch(`https://api.github.com/users/camscoderepo/repos`);
        if(!response.status){
            throw new Error('Network response was not good')
        }
        const data = await response.json()

        const names = data.map(name => {
            return name.name
        })
        
     let array = names;

     array.forEach(function (item, index) {
         document.getElementById("names").innerHTML += item;
     });

     
    } catch(error) {
        console.log(error.message);
    }
}
getRepoNames();







    //fetch api request to github repos
    // fetch('https://api.github.com/users/camscoderepo/repos')
    // .then(res => res.json())
    // .then(res => res.map(data => data.url))
    // .then(urls => console.log(urls));
    // document.getElementsByClassName('projectLink')
    
    //Vanta.JS background animation
    VANTA.BIRDS({
        el: "#birds",
        backgroundColor: 0xf7bff,
        //color1: 0xcf1d1d,
        //color2: 0xc0c033,
        wingSpan: 35.00,
        speedLimit: 9.00,
        quantity: 3.00,
        separation: 20,
        cohesion: 20
      })




});




