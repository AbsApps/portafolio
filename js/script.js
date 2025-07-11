var lading = {};

(function () {

    var that = this;

    this.init = () => {
        console.log('init landing')
        this.eventListener()
        this.initSwipperSlider()
        this.clickNavLink()
    }

    this.initSwipperSlider = () => {

        // CARDS
        var swiperCards = new Swiper(".myCardsPictures", {
            effect: "cards",
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        // CERTIFICACIONES
        var swiperCertification = new Swiper(".myCertifications", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            breakpoints: {
                340: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });

        //Portfolio
        // var myPortfolio = new Swiper(".myPortfolio", {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        //     },
        //     // autoplay: {
        //     //     delay: 3500,
        //     //     disableOnInteraction: false,
        //     // },
        //     breakpoints: {
        //         340: {
        //             slidesPerView: 1,
        //             spaceBetween: 10,
        //         },
        //         640: {
        //             slidesPerView: 2,
        //             spaceBetween: 25,
        //         },
        //         768: {
        //             slidesPerView: 2,
        //             spaceBetween: 30,
        //         },
        //         1024: {
        //             slidesPerView: 2,
        //             spaceBetween: 10,
        //         },
        //     },
        // });

    }

    this.eventListener = () => {
        let lastKnownScrollPosition = 0;
        document.addEventListener("scroll", (event) => {
            lastKnownScrollPosition = window.scrollY;

            var element = document.getElementById("mainNav");
            if (lastKnownScrollPosition == 0) {
                element.classList.remove("active");
            } else {
                element.classList.add("active");
            }
        });
    }



    this.toggleNavActive = (clickedNavBar) => {
        var navLink = document.querySelectorAll('.nav-link')

        navLink.forEach(nav => {
            if (nav !== clickedNavBar){
                nav.classList.remove('active')
            }
        })
    }

    this.clickNavLink = () => {


        document.querySelectorAll('.nav-link').forEach(item => {
            item.addEventListener('click', (e) => {
                // debugger
                this.toggleNavActive(item)
                // console.log(item)
                item.classList.add('active')
            })
        })
    }

    window.onload = function (e) { that.init(); }

}).call(lading);
