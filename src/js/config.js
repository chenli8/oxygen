angular.module("myapp").config(['$stateProvider', "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/Home');
    $stateProvider.state('Home', { //主页
            url: "/Home",
            templateUrl: "src/views/Home.html",
            controller: "homecontroller"

        })
        .state('hbanner', { //主页-氧气精选banner-lookbook
            url: "/hbanner/:id",
            templateUrl: "src/views/home/hbannerlookbook.html",
            controller: "lookbookCon"
        })
        .state('hBigboxTopic', { //主页-氧气精选大盒子-内衣专题topic
            url: "/hBigboxTopic/:id",
            templateUrl: "src/views/home/hBigTopic.html",
            controller: "bigboxtopicCon"

        })
        .state('hChosensm', { //主页-氧气精选小盒子
            url: "/hChosensm/:id",
            templateUrl: "src/views/home/hchosensm.html",
            controller: "samllboxCon"

        })
        .state('homesail', { //主页-小编随笔
            url: "/homesail",
            templateUrl: "src/views/home/homesail.html"

        })
        .state('Experience', { //体验师
            url: "/Experience",
            templateUrl: "src/views/Experience.html",
            controller: "experiencecontroller"

        })
        .state('Shop', { //商店
            url: "/Shop",
            templateUrl: "src/views/Shop.html"

        })
        .state('Topic', { //话题
            url: "/Topic",
            templateUrl: "src/views/Topic.html",
            resolve: {
                datial: function ($http) {
                    return $http({
                        method: "GET",
                        url: "Topic.json"
                    })
                }
            },
            controller: "TopicCon"
        })
        .state('Person', { //个人中心
            url: "/Person",
            templateUrl: "src/views/Person.html"

        })
        .state('Topic.all', { //全部
            url: "/all",
            templateUrl: "src/views/all.html"
            //controller:"allCon"

        })
        .state('Topic.attention', { //关注
            url: "/attention",
            templateUrl: "src/views/attention.html"

        })
        .state('whisper', { //悄悄话
            url: "/whisper/:id",
            templateUrl: "src/views/whisper.html",
            resolve: {
                info: function ($http) {
                    return $http({
                        method: "GET",
                        url: "Topic.json"
                    })
                }
            },
            controller: "whisperCon"

        })
        .state('search', { //搜索页面
            url: "/search",
            templateUrl: "src/views/search.html",
            scope:{
            	myData:"="
            },
            resolve:{
              searchgoods:function($http){
              	return $http({
              		    method:"GET",
              		    url:"goods.json"
              	})
              }
            },
            controller: "searchCon"
            
        })
        .state('search.hot', { //搜索页面
            url: "/hot",
            templateUrl: "src/views/hot.html",
            controller:"hotCon"
        })
        .state('search.goods', { //搜索页面
            url: "/goods",
            templateUrl: "src/views/goods.html",
            controller:"goodsCon"
        })
        .state('search.users', { //搜索页面
            url: "/users",
            templateUrl: "src/views/users.html",
            controller:"usersCon"
        })
        .state('car', { //购物车页面
            url: "/car",
            templateUrl: "src/views/car.html"
        })
        .state('Shop.shopping', {
            url: "/shopping",
            templateUrl: "src/views/shopping.html",
            controller: "shoppingCont",
            resolve: {
                shoppingData: function ($http) {
                    return $http.get("./src/data/shopping.json")
                        .then(function (obj) {
                            return obj
                        })
                }
            }

        })
        .state('Shop.brand', {
            url: "/brand",
            templateUrl: "src/views/brand.html",
            controller: "brandCont",
            resolve: {
                brandData: function ($http) {
                    return $http.get("./src/data/brand.json")
                        .then(function (obj) {
                            return obj
                        })
                }
            }

        })
        .state('salelist', {
            url: "/salelist",
            templateUrl: "src/views/salelist.html",
            controller: "salelistCont",
            resolve: {
                salelistData: function ($http) {
                    return $http.get("./src/data/salelist.json")
                        .then(function (obj) {
                            return obj
                        })
                }
            }

        })
        .state('shop_filter', {
            url: "/shop_filter?id",
            templateUrl: "src/views/shop_filter.html",
            controller: "filCont",
            resolve: {
                shop_filterData: function ($http) {
                    return $http.get("./src/data/shopping.json")
                        .then(function (obj) {
                            return obj
                        })
                }
            }
        })
        .state('Person.perPassWord', {
            url: "/perPassWord",
            templateUrl: "src/views/perPassWord.html"
        })
        .state('Person.perLogin', {
            url: "/perLogin",
            templateUrl: "src/views/perLogin.html"
        })
        .state('Person.perLogin.order', {
            url: "/order",
            templateUrl: "src/views/login/order.html"
        })
        .state('Person.perLogin.fund', {
            url: "/fund",
            templateUrl: "src/views/login/fund.html"
        })
        .state('Person.perLogin.cash', {
            url: "/cash",
            templateUrl: "src/views/login/cash.html"
        })
        .state('Person.perLogin.request', {
            url: "/request",
            templateUrl: "src/views/login/request.html"
        })
        .state('Person.perLogin.collection', {
            url: "/collection",
            templateUrl: "src/views/login/collection.html"
        })
        .state('Person.perLogin.test', {
            url: "/test",
            templateUrl: "src/views/login/test.html"
        })
        .state('Person.perLogin.info', {
            url: "/info",
            templateUrl: "src/views/login/info.html"
        })
        .state('Person.perLogin.topic', {
            url: "/topic",
            templateUrl: "src/views/login/topic.html"
        })
        .state('Person.perLogin.service', {
            url: "/service",
            templateUrl: "src/views/login/service.html",
            controller: "serCon"
        })
        .state('Person.perLogin.config', {
            url: "/config",
            templateUrl: "src/views/login/config.html"
        })
        .state('jujia', { //居家
            url: "/jujia/:title",
            templateUrl: "src/views/Exp_jujia.html",
            controller: "jujiacontroller"

        })
        .state('expbanner', { //banner----首页的mdbox
            url: "/expbanner",
            templateUrl: "src/views/expbanner.html"

        })
        .state('expguanzhu', { //关注
            url: "/expguanzhu",
            templateUrl: "src/views/Exp_guanzhu.html"

        })
        .state('expchakan', { //查看全部
            url: "/expchakan",
            templateUrl: "src/views/Exp_chakan.html"

        })
        .state("expbg", {
            url: "/expbg",
            templateUrl: "src/views/Exp-tiyanbg.html"
        })


}])