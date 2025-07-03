document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        // Alterna la clase 'hidden' para mostrar/ocultar el menú
        mobileMenu.classList.toggle('hidden');
        // También puedes añadir clases para animaciones aquí si quieres
    });

    // Opcional: Cerrar el menú si se hace clic fuera de él (para mejorar la UX)
    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});


const swiper = new Swiper('.swiper.cards', {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});



const swiperCredentials = new Swiper(".swiper.credentials", {
    slidesPerView: 4,
    spaceBetween: 4,
    freeMode: true,
          autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 4,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 4,
        }
    }
});


// AOS INIT
AOS.init();