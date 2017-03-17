 //返回上一级的自定义服务
angular.module("myapp").factory('backs', function ($window) {
    var obj = {};
    obj.goback = function () {
        $window.history.back();
    }
    return obj;
})
//设置一个开关按钮，num++的事件


//父级控制器
angular.module("myapp").controller('shopping', ['$scope', 'backs', '$rootScope', function ($scope, backs, $rootScope) {
    $rootScope.back = function () {
        backs.goback();
    }
    $scope.list = [
        {
            router: "all",
            title: "全部"
        },
        {
            router: "attention",
            title: "关注"
        }

          ]
}])
//搜索页的控制器
angular.module("myapp").controller('searchCon', ['$scope', 'backs', '$rootScope', "$state",'searchgoods','$filter',function ($scope, backs, $rootScope, $state,searchgoods,$filter) {
	//搜索过滤功能
	if(searchgoods.status==200){
		$scope.data=searchgoods.data;	
		$scope.oninput=function(){
			if($scope.serchdata){ 
		       $scope.searchlist=$filter("filter")($scope.data,$scope.serchdata)
		       if($scope.searchlist.length==0){
		       	   return false;  
		       }else{
		       	 $scope.mydata=$scope.searchlist
		       }
			}else{
				return false;
			}
			
		}
		
		
	}
	
	//跳转返回功能
    $scope.gopage = function () {
        $state.go("Topic.all")
    }
    

}])
//hot热搜
angular.module("myapp").controller('hotCon', ['$scope', '$rootScope', "$state", function ($scope, $rootScope, $state) {
	//1.控制器间通讯    2.@ = &
	
	if($scope.$parent.mydata){
		$scope.goodsdata=$scope.$parent.mydata
	}
}])
//goodsCon
angular.module("myapp").controller('goodsCon', ['$scope', '$rootScope', "$state", function ($scope, $rootScope, $state) {
	//1.控制器间通讯    2.@ = &
	
	if($scope.$parent.mydata){
		$scope.goodsdata=$scope.$parent.mydata
	}
}])
//usersCon
angular.module("myapp").controller('usersCon', ['$scope', '$rootScope', "$state", function ($scope, $rootScope, $state) {
	//1.控制器间通讯    2.@ = &   3.合并文件
	
	if($scope.$parent.mydata){
		$scope.goodsdata=$scope.$parent.mydata;
		  	//console.log($scope.goodsdata)
	}
}])

//话题控制器
angular.module("myapp").controller('TopicCon', ['$scope', '$rootScope', "$state", 'datial',function ($scope, $rootScope, $state,datial) {
	
  //获取数据
  if(datial.status==200){
  	$scope.lists=datial.data;

  }

}])

angular.module("myapp").controller('allCon', ['$scope', 'change', '$rootScope', "$state", 'datial',function ($scope, change, $rootScope, $state,datial) {
    
  

}])

//话题细节化
angular.module("myapp").controller('whisperCon', ['$scope', 'backs', '$rootScope', "$state", 'info','$stateParams',function ($scope, backs, $rootScope, $state,info,$stateParams) {
	var id=$stateParams.id;
	   _this=this;
	if(info.status==200){
  	angular.forEach(info.data,function(value,key){
  		if(value.id==id){
  			$scope.typeinfo=value;
  			
  		}
  	})
  	
  }
  
}])
angular.module("myapp").controller('homecontroller', ['$scope', '$http', function ($scope, $http) {
    //$scope.aaa = 111
    $http.get("src/data/homedata.json")
        .success(function (data, status, headers, config) {
            $scope.homedata = data;
            $scope.banner = data.banner;
            //首页 氧气精选的数据
            $scope.chosenData = data.chosen;
            //首页 内衣主题的数据
            //$scope.topicData = data.topic;
        })
        .error(function (data) {
            consile.log("err")
            console.log(data)

        })

}])
angular.module("myapp").controller('experiencecontroller',['$scope','$http',function($scope,$http){
    $http.get("src/data/experience.json")
        .success(function(data,status,headers,config){
            $scope.expdata=data;
            $scope.banner=data.banner;
            $scope.zhaobei=data.zhaobei;
            $scope.changjing=data.changjing;
            $scope.tiyanshi=data.tiyanshi;
            $scope.baogao=data.tiyanbaogao;
            $scope.guanzhu=data.guanzhu;
        })
        .error(function(data){
            console.log("err")
        })
}])
angular.module("myapp").controller('jujiacontroller',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
    $http.get("src/data/experience.json")
        .success(function(data,status,headers,config){
           
            $scope.jujiadata=data;
            //console.log($scope.jujiadata.changjing);
            $scope.title=$stateParams.title;
            for(var i in $scope.jujiadata.changjing){
            	if($scope.title==$scope.jujiadata.changjing[i].title){
            		$scope.math=$scope.jujiadata.changjing[i];
            	}
            	//console.log($scope.math)
            }
 
        })
        .error(function(data){
            console.log("err")
        })
      // console.log($stateParams)
}])






function shoppingCont($scope, shoppingData) {
    $scope.data = shoppingData.data.order;
    $scope.change = shoppingData.data.change;
    $scope.datas = shoppingData.data.news;
    $scope.bool = true;
    $scope.bools = false;
    $scope.tabClick = function (obj) {
        if (obj == "新品入荷") {
            $scope.bool = false;
            $scope.bools = true;
            $(".product_nav").find('p').eq()

        } else if (obj == "今日折扣") {
            $scope.bool = true;
            $scope.bools = false;
        }
    }

}

function brandCont($scope, brandData) {
    $scope.dates = brandData.data.order;

}

function salelistCont($scope,salelistData){
	$scope.list = salelistData.data.list; 
	console.log($scope.list)
}
function filCont($scope,$stateParams,shop_filterData){
	$scope.id =$stateParams.id;
	var filter = shop_filterData.data.filter;
	$scope.filter = shop_filterData.data.filter
	$scope.bool=true;
	$scope.bools=true;
	for(var i in filter){
       if($scope.id==filter[i].id){
           $scope.name=filter[i].name;
           
       }
    }
	
	
}
function perCon($scope,$http,$location){
    $scope.check=function(){
        get($scope.user,$scope.ps)
        //console.log($scope.user)
    }
  function get(user,ps){
        var params={
            user:user,
            ps:ps
        }
       $http.get("src/data/livelist.json",params).success(function(result){
            if(params.user==result.user&&params.ps==result.ps){
                $scope.isUser=false;
                $location.path("/Home")
            }else{
                $scope.isUser=true;
            }
       })
    }
    

}
function serCon($scope){
    $scope.input=[
        {
            'img':"src/images/logo_03.png",
            'position':'text-left',
            'bgColor':'btn-primary',
            'message':'您好，我是氧气客服，有什么可以帮您的吗？'
        },
        {
            'position':'text-left',
            'img':"src/images/logo_03.png",
            'bgColor':'btn-primary',
            'message':'您好哦，氧气工作室，请问有什么可以帮您的呢？'
        },
        {
            'position':'text-left',
            'img':"src/images/logo_03.png",
            'bgColor':'btn-primary',
            'message':'What up'
        }
    ]
   $scope.addInput=function(msg){
        if(msg.length==0){
            return false;
        }
        $scope.input.push(
                {
                    'position':'text-right',
                    'bgColor':'btn-primarys',
                    'img':"src/images/login_head.jpg",
                    'message':msg
                }
            )
        $scope.inputMsg="";
    }
}
angular.module("myapp")
    .controller("shoppingCont", shoppingCont)
    .controller("brandCont", brandCont)
    .controller("salelistCont",salelistCont)
	.controller("filCont",filCont)
    .controller("perCon",perCon)
    .controller("serCon",serCon)

    //自定义指令进行tab切换功能
angular.module("myapp").directive('myTab', function () {
    return {
        restrict: "EAM",
        replace: true,
        templateUrl: "./views/tab.html",
        transclude: true,
        scope: {
            myData: '=',
            myId: '@',
            myFn: "&"
        },
        controller: ['$scope', function ($scope) {}],
        link: function (scope, element, attr) {
            $(element).find("div").css({
                padding: '100px'
            })
            $(element).on('click', 'button', function () {
                $(this).addClass('high').siblings('button').removeClass("high");
                $(this).siblings('div').eq($(this).index()).show().siblings('div').hide();
            })
        }
    }
})




function myTabs() {
    return {
        restrict: "ECMA",
        replace: true,
        template: "<div class='shop_nav'>" +
            "<p ui-sref='Shop.shopping' class='active'>商品</p>" +
            "<p ui-sref='Shop.brand' >品牌馆</p>" +
            "</div>",
        link: function (scope, element, attr) {
            element.find("p").on("click", function () {
                var ind = $(this).index()
                $(this).addClass("active").siblings().removeClass("active")


            })
        }
    }
}


function mySwiper($timeout) {
    return {
        restrict: "ECMA",
        replace: true,
        template: "<ul class='swiper-wrapper'>" +
            "<li class='swiper-slide'><img src='src/images/banner_02.png'/></li>" +
            "<li class='swiper-slide'><img src='src/images/banner1_02.png' /></li>" +
            "<li class='swiper-slide'><img src='src/images/banner3_02.png' /></li>" +
            "<li class='swiper-slide'><img src='src/images/banner5_02.png' /></li>" +
            "<li class='swiper-slide'><img src='src/images/banner4_02.png' /></li>" +
            "</ul>",
        link: function (scope, element, attr) {
            $timeout(function () {
                var swipers = new Swiper(".shopping_banner", {
                    autoPlay: true,
                    paginationClickable: true,
                    spaceBetween: 30,
                    pagination: '.swiper-pagination'
                })
            })

        }
    }
}

function newSwiper($timeout) {
    return {
        restrict: "ECMA",
        replace: true,
        template: "<div class='swiper-container thumb_container'>" +
            "<ul class='new_content swiper-wrapper'>" +
            "<li class='swiper-slide new_cont' ng-repeat='i in datas'>" +
            "<p >" +
            "<img ng-src='{{i.img}}' />" +
            "</p>" +
            "<p>{{i.title}}</p>" +
            "<p>{{i.price}}</p>" +
            "</li></ul></div>",
        link: function (scope, element, attr) {
            $timeout(function () {
                var swipe = new Swiper(".thumb_container", {
                    slidesPerView: 'auto',
                    onTap: function (a) {
                        swipe.slideTo(a.clickedIndex, 300);
                        console.log(a.clickedIndex)
                    }
                })
            })
        }
    }
}

function saleTime() {
    return {
        restrict: "ECMA",
        replace: true,
        template: "<div id='sale_mark'>" +
            "</div>",
        link: function (scope, element, attr) {
            var sales = document.getElementById("sale_mark")

            function time() {
                var end = new Date(2018, 1, 1)
                var start = new Date()
                var num = end - start
                var h = Math.floor(num / 1000 / 60 / 60 % 24)
                var m = Math.floor(num / 1000 / 60 % 60)
                var s = Math.floor(num / 1000 % 60)
                if (h < 10) {
                    h = "0" + h
                }
                if (m < 10) {
                    m = "0" + m
                }
                if (s < 10) {
                    s = "0" + s
                }
                sales.innerHTML = h + ":" + m + ":" + s
            }
            time()
            setInterval(time, 1000)
        }
    }
}

function listSwiper($timeout) {
    return {
        restrict: "ECMA",
        replace: true,
        template: "<div class='bottom_item swiper-container' ng-repeat='i in change'>" +
            "<h1>{{i.title}}</h1>" +
            "<p>{{i.content}}</p>" +
            "<div class='swiper-wrapper item_cont'>" +
            "<div class='swiper-slide' ng-repeat='item in i.pic'>" +
            "<img ng-src='{{item.img}}' />" +
            "<p>{{item.price}}</p>" +
            "</div>" +
            "</div>" +
            "<p>{{i.num}}</p>" +
            "</div>",
        link: function (scope, element, attr) {
            $timeout(function () {
                var swipe = new Swiper(".bottom_item", {
                    slidesPerView: 'auto'
                })
            })

        }
    }
}
function saleTab(){
		return {
        restrict:"ECMA",
        replace:true,
        template:"<div class='salelist_nav'>" +
                    "<p  class='active2'>商品介绍</p>" +
                    "<p  >图文详情</p>" +
                    "<p  >体验报告4</p>" +
                    "<p  >相关专题</p>" +
                "</div>",
         link:function (scope,element,attr) {
          element.find("p").on("click",function(){
          		$(this).addClass("active2").siblings().removeClass("active2")	
          })
        }
    }
}
function mainSwiper($timeout){
	return {
        restrict:"ECMA",
        link:function (scope,element,attr) {
         			$timeout(function(){
          			var swiper = new Swiper(".main_swiper ",{
                     slidesPerView:'auto',
                     pagination:'.swiper-pagination'
                })
          		}) 
        }
    }
	
}
function saleSwiper($timeout){
	return {
        restrict:"ECMA",
        link:function (scope,element,attr) {
         			$timeout(function(){
          			var swiper = new Swiper(".s_m_cont ",{
                    paginationClickable: true,
								    spaceBetween: 30,
								    onSlideChangeStart:function (i) {
								        nums=i.activeIndex
								        $(".salelist_nav p").eq(nums).addClass("active2").siblings().removeClass("active2");
								    }
                })
          			$(".salelist_nav p").on("click",function () {
						        ind = $(this).index()
						        $(this).addClass("active2").siblings().removeClass("active2");
						        swiper.slideTo(ind,300,false)
						    })
          		}) 
        }
    }
}


  
  //改变背景与数字加加
function changeBg(){
	return {
        restrict:"ECMA",
        link:function (scope,element,attr) {
         			//this指的是window
         			//不用注入
         			//自定义属性
         			//bg放在函数执行中，count放在外部
         			  var  flug=false,
         			       count=~~$(element).find("span").text();
         			$(element).click(function(){
         				  flug=!flug;
         				  bg=$(element).find("i").attr('bg');   //不会再进行改变
         				  if(flug){
         				  	 count++;//发生改变
         				  	 $(element).find("span").text(count);
         				  	 $(element).find("i").addClass(bg)
         				  	 /*if($(element).hasClass('zan')){
         				  	 	$(element).addClass(bg)
         				  	 }*/
         				  	$(element).addClass('bgs')
         				  }else{
         				  	 count--;
         				  	 $(element).removeClass('bgs')
         				  	 $(element).find("span").text(count);
         				  	 $(element).find("i").removeClass(bg)
         				  }
         			})
        }
    }
	
}





function shopCh($timeout){
	return {
        restrict:"ECMA",
        link:function (scope,element,attr) {
         	$timeout(function(){
          		scope.change=function(e){
          			if(scope.bool==true){
          				scope.bool=!scope.bool;
          				scope.bools=false;
          			}else{
          				scope.bool=true
          				scope.bools=true
          				
          			}         			
          		}
          	
			   scope.shopClick=function(id){
			   	var len = $("p").length
				   for(var i=0;i<len;i++){
				   		if(i==id){
				   			$("p").eq(i)[0].style.color="#92d5c3"
				   			scope.name=$("p").eq(i)[0].innerHTML	
				   			scope.bool=true
				   			scope.bools=true
				   		}else{	
				   			$("p").eq(i)[0].style.color=""
				   		}
				   }	
				}


          	}) 
        }
    }
}
function shopSe($timeout){
	return {
        restrict:"ECMA",
        link:function (scope,element,attr) {
         	$timeout(function(){
			   
          	}) 
        }
    }
}

angular.module("myapp")
    .directive("myTabs", myTabs)
    .directive("mySwiper", mySwiper)
    .directive("newSwiper", newSwiper)
    .directive("saleTime", saleTime)
    .directive("listSwiper", listSwiper)
    .directive("saleTab",saleTab)
    .directive("saleSwiper",saleSwiper)

    .directive("mainSwiper",mainSwiper)
    .directive("changeBg",changeBg)

    .directive("mainSwiper",mainSwiper)
    .directive("mainSwiper",mainSwiper)
    .directive("shopCh",shopCh)
    .directive("shopSe",shopSe)

angular.module("myapp").directive('myExp', function () {
    return {
        restrict: "CEAM",
       
        controller: ['$scope', function ($scope) {}],
        link: function (scope, element, attr) {
            
            $(element).on('click', function () {
                var size=$(this).text()
                console.log($(this).text())
                $(this).addClass('bg').siblings().removeClass("bg");
               $("#oll").find("li").addClass("on");
              $("#oll").find("li").on("click",function(){
                   // $(this).attr('ui-sref',"expsize")
                 var type=$(this).text();
                   tyssize=type+size;
                  console.log(tyssize)
               })

            })

        }
    }
})


