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

new Vue({

})

$(document).ready(function() {
    //Typed plugin
    var typed = new Typed(".typed", {
        strings: ["JavaScript Developer", "Ninja", "Autodidact"],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    }); 

    const observer = lozad();
    observer.observe

      //Vanta.JS background animation
    VANTA.BIRDS({
        el: "#birds",
        backgroundColor: 0xf7bff,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        birdSize: 4.00,
        wingSpan: 40.00,
        speedLimit: 6.00,
        cohesion: 10.00,
        quantity: 5.00
    })
   
   $("[data-fancybox]").fancybox();

   //filters for portfolio
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


    //sticky navigation code
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
                ['Javascript', 50.0],
                ['HTML',8.4 ],
                {
                    name: 'CSS',
                    y: 10,
                    sliced: true,
                    selected: true
                },
                ['SQL', 8.5],
                ['C#', 2],
                ['GO', 15.0],
                ['Python', 6.2],
                ['PHP', 0.7]
            ]
        }]
    });

    //HighCharts bar chart

    var chart = new Highcharts.Chart({
        chart: {
          renderTo: 'figure-container',
          backgroundColor: '#fefbd8',
          type: 'column',
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
          }
        },
        title: {
          text: 'Dev Skills Chart'
        },
        subtitle: {
          text: 'Test options by dragging the sliders below'
        },
        plotOptions: {
          column: {
            depth: 80
          }
        },
        series: [{
            data: [
                ['Web Dev', 89.0],
                ['Accessibility',85 ],
                ['Design', 80.5],
                ['Animation', 85],
                ['Back-End', 88.2]
            
            ]
        }]
      });
      
      function showValues() {
        $('#alpha-value').html(chart.options.chart.options3d.alpha);
        $('#beta-value').html(chart.options.chart.options3d.beta);
        $('#depth-value').html(chart.options.chart.options3d.depth);
      }
      
      // Activate the sliders
      $('#sliders input').on('input change', function () {
        chart.options.chart.options3d[this.id] = parseFloat(this.value);
        showValues();
        chart.redraw(false);
      });
      
      showValues();

    

    //promise to get github repositories
 
// const fetchPromise = fetch(`https://api.github.com/users/camscoderepo/repos`);

// const nameList = document.getElementById("names");

// fetchPromise.then(response => {
//   return response.json();
// }).then(repos => {
//     nameList.innerHTML = listOfRepos(repos); 
// });

      
// function listOfRepos (repos) {
//     const names = repos.map(repo => repo.name).join("\n")
//     .then(names)
// }




  

    //Vanta Clouds
    // VANTA.CLOUDS({
    //     el: "#birds",
    //     mouseControls: true,
    //     touchControls: true,
    //     minHeight: 200.00,
    //     minWidth: 200.00
    //   })
});




