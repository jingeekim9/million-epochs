/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(document).ready(function() {
    var index = 0;
    var content = ["Why Did World War II Start? World War II started because some countries didn't get along with each other, and they had some big arguments. The main countries that were on one side were Germany, Italy, and Japan. They were called the Axis Powers. On the other side were countries like the United States, United Kingdom, France, and the Soviet Union, and they were called the Allies. These countries didn't like what the Axis Powers were doing, so they decided to fight against them", "Important People: There were some important leaders during World War II. Adolf Hitler was the leader of Germany, Winston Churchill was the leader of the United Kingdom, and Franklin D. Roosevelt was the President of the United States.", "The War Begins: In 1939, Germany invaded Poland, which made the United Kingdom and France very upset. They told Germany to stop, but Germany didn't listen. This made the war start officially because the United Kingdom and France declared war on Germany.", "The Fight Spreads: The war didn't stay in Europe. Japan attacked the United States at a place called Pearl Harbor in 1941. This made the United States join the war as well.", "The War in Europe: For a few years, there were big battles in Europe. Germany tried to take over many countries, and the Allies fought to stop them. The war was very hard for everyone, and many people had to leave their homes.", "The War in the Pacific: In the Pacific Ocean, the United States and its allies fought against Japan. They had big battles on islands and in the sea. It was tough and dangerous.", "The End of the War: Finally, in 1945, the Allies started to win. Germany surrendered in May 1945, and Japan surrendered in September 1945. This means they gave up and stopped fighting. The war was over!"]

    var images = ['assets/img/image_1.jpg', 'assets/img/image_2.jpg','assets/img/image_3.jpg','assets/img/image_4.jpg','assets/img/image_5.jpg','assets/img/image_6.jpg','assets/img/image_7.jpg']

    $("#generate").on('click', function() {
        $('#opening').fadeOut("slow", function() {
            $('#opening').attr('style', 'display: none !important');
            $("#fairy_tale_img").attr('src', images[index])
            $("#content").html(content[index]);
            $('#story').fadeIn(duration=2000, function() {

            })
        })
    });

    $('#next').on('click', function() {
        index += 1;
        if(index != 0)
        {
            $("#back").attr('style', 'display: flex;')
        }
        if(index == content.length-1) {
            $("#next").attr('style', 'display: none;')
        }
        else {
            $("#next").attr('style', 'display: flex;')
        }
        $('#content_container').fadeOut("slow", function() {
            $("#content").html(content[index]);
            $("#fairy_tale_img").attr('src', images[index])
            $('#content_container').fadeIn("slow", )
        })
    })

    $('#back').on('click', function() {
        index -= 1;
        if(index != content.length-1)
        {
            $("#next").attr('style', 'display: flex;')
        }
        if(index == 0) {
            $("#back").attr('style', 'display: none;')
        }
        else {
            $("#back").attr('style', 'display: flex;')
        }
        $('#content_container').fadeOut("slow", function() {
            $("#content").html(content[index]);
            $("#fairy_tale_img").attr('src', images[index])
            $('#content_container').fadeIn("slow", )
        })
    })

    $('#start_over').on('click', function() {
        index=0;
        $('#story').fadeOut("slow", function() {
            $('#story').attr('style', 'display: none !important');
            $("#content").html('');
            $('#opening').fadeIn(duration=2000, function() {

            })
        })
    })
})