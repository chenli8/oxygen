angular.module("myapp")
    .directive('myswiper', function () {
        return {
            restrict: "ECA",
            link: function (scope, element, attr) {
                var swiper = new Swiper('.swiper-container-big', {
                    onSlideChangeStart: function () { //当滑块滚动开始调用
                        // console.log(swiper.activeIndex); //当前滑块索引号
                        $('.home-nav-list').eq(swiper.activeIndex).addClass('home-nav-on').siblings().removeClass('home-nav-on');
                    },
                });
                $('.home-nav-list').click(function () {
                        var ind = $(this).index();
                        swiper.slideTo(ind, 1000, false); //切换到第一个slide，速度为1秒
                        $('.home-nav-list').eq(ind).addClass('home-nav-on').siblings().removeClass('home-nav-on');
                    })
                    /* document.addEventListener('touchmove', function (e) {
     e.preventDefault();
 }, false);*/


            }
        }
    })
    .directive('myswiper1', function () {
        return {
            restrict: "ECA",
            link: function (scope, element, attr) {
                var swiper1 = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    observer: true, //修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true, //修改swiper的父元素时，自动初始化swiper
                });
            }
        }
    })
    .directive('myswiper2', function () {
        return {
            restrict: "ECA",
            link: function (scope, element, attr) {
                var swiper2 = new Swiper('.swiper-container-smpic', {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                    freeMode: true,
                    observer: true,
                    observeParents: true
                });


            }
        }
    })
    .directive('myswiper3', function () {
        return {
            restrict: "ECA",
            link: function (scope, element, attr) {
                var swiper2 = new Swiper('.swiper-container-mdpic', {
                    slidesPerView: 2.4,
                    spaceBetween: 12,
                    freeMode: true,
                    observer: true,
                    observeParents: true
                });


            }
        }
    })