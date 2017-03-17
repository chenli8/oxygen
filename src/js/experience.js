angular.module("myapp").directive("swipers", function () {
        return {
            restrict: "C",
            link: function (scope, element, attrs) {
                var mySwiper1 = new Swiper('.swipers', {
                    observer: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay: 4000
                });
                
            }
        }

    }).directive("swipers2", function () {
        return {
            restrict: "C",
            link: function (scope, element, attrs) {
                var mySwiper2 = new Swiper('#swiper-container2',{
            
           // watchSlidesProgress : true,
            
           // watchSlidesVisibility : true,
            slidesPerView : 2,
            
            onTap: function(){
           
                    mySwiper3.slideTo( mySwiper2.clickedIndex)
                }
            })
            var mySwiper3 = new Swiper('#swiper-container3',{
            
            onSlideChangeStart: function(){
                    updateNavPosition()
                }

            })
            function updateNavPosition(){
                
                $('#swiper-container2 .active-nav').removeClass('active-nav')
                var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');
                
            }
                
            }
        }

    })
    .directive("swipers4", function () {
        return {
            restrict: "C",
            link: function (scope, element, attrs) {
                var mySwiper3 = new Swiper('.swipers4', {
                    slidesPerView: 3,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true, //修改swiper的父元素时，自动初始化swiper
                

                });
                
            }
        }

    })
    .directive("swipers5", function () {
        return {
            restrict: "C",
            link: function (scope, element, attrs) {
                var mySwiper5= new Swiper('#swiper-container5',{
            
           // watchSlidesProgress : true,
            
           // watchSlidesVisibility : true,
            slidesPerView : 2,
            
            onTap: function(){
           
                    mySwiper6.slideTo( mySwiper5.clickedIndex)
                }
            })
            var mySwiper6 = new Swiper('#swiper-container6',{
            
            onSlideChangeStart: function(){
                    updateNavPosition()
                }

            })
            function updateNavPosition(){
                
                $('#swiper-container5 .active-nav').removeClass('active-nav')
                var activeNav = $('#swiper-container5 .swiper-slide').eq(mySwiper6.activeIndex).addClass('active-nav');
                
            }
                
            }
        }

    })
     .directive("swipers7", function () {
        return {
            restrict: "C",
            link: function (scope, element, attrs) {
                var mySwiper7 = new Swiper('.swipers7', {
                    slidesPerView: 2.5,
                    spaceBetween:12,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true, //修改swiper的父元素时，自动初始化swiper
                });
                
            }
        }

    })
       .directive("swipers11", function () {
        return {
            restrict: "C",
            link: function (scope, element, attrs) {
                var mySwiper11= new Swiper('#swiper-container11',{
            
           // watchSlidesProgress : true,
            
           // watchSlidesVisibility : true,
            slidesPerView :3,
            
            onTap: function(){
           
                    mySwiper12.slideTo( mySwiper11.clickedIndex)
                }
            })
            var mySwiper12 = new Swiper('#swiper-container12',{
            
            onSlideChangeStart: function(){
                    updateNavPosition()
                }

            })
            function updateNavPosition(){
                
                $('#swiper-container11 .active-nav').removeClass('active-nav')
                var activeNav = $('#swiper-container11 .swiper-slide').eq(mySwiper12.activeIndex).addClass('active-nav');
                
            }
                
            }
        }

    })
   