var main=$(".main");
var content_main;
var product_count=0;//用来计数mouseover在产品上的次数，只能生成一次
var num=1;//分别有1,2,3，代表首页，内容页，产品页,默认在首页
var clear=false;//清除最后的定时器
$(".product1-button-2").click(function(){//点击了解更多
	num=2;
	$(".homepage-device").animate(
		{marginTop:"1180px"},
		2000, function() {//记得调回去2000
			// var main=$(".main");
			main.remove();
			// $(".header").after(main);
			content_main=$("<div class='content_main'></div>");
			$('.footer').before(content_main);//添加content页的main
			var content_main_block_1=$("<div class='content_main_block_1 parent'></div>");
			var content_main_block_2=$("<div class='content_main_block_2 parent'></div>");
			var content_main_block_3=$("<div class='content_main_block_3 parent'></div>");
			var content_main_block_4=$("<div class='content_main_block_4 parent'></div>");
			$(".content_main").prepend(content_main_block_1,content_main_block_2,content_main_block_3,content_main_block_4);
			var content_main_block_body_1=$("<div class='content_main_block_txt parent'><h2 class='content_main_block_h2'></h2><h3 class='content_main_block_h3'></h3></div><div class='content_main_block_img'></div>");
			// var img123=$("<img class='content-img'></img>");
			// $(".content_main_block_1").append(img123);
			// $(".content-img")[0].attr("src","../images/Content/Content-1.png")
			$(".content_main_block_1").append(content_main_block_body_1);
			$(".content_main_block_h2").eq(0).text("让你梦想成真的屏幕");
			$(".content_main_block_h3").eq(0).text("Surface Studio 拥有28英寸PixelSense™ 显示屏，大到引人注目，薄到令人惊叹，您可以边绘画、编辑和设计边视觉化您的创意。然后通过像素1350万的色彩逼真、画质清晰的屏幕生动展示您的奇思妙想。");
			var content_main_block_body_2=$("<div class='content_main_block_txt parent'><h2 class='content_main_block_h2'></h2><h3 class='content_main_block_h3'></h3></div><div class='content_main_block_img'></div>");
			$(".content_main_block_2").append(content_main_block_body_2);
			$(".content_main_block_h2").eq(1).text("创作过程的新工具");
			$(".content_main_block_h3").eq(1).text("使用 Surface Dial 与 Surface Studio 交互。*按住可显示工具的径向菜单，在Adobe CC 和 Bluebeam*等应用程序中执行你喜欢的操作。或者只需将 Surface Dial 直接放在屏幕上，即可看到颜色选取器或标尺神奇地显示。");
			var content_main_block_body_3=$("<div class='content_main_block_txt parent'><h2 class='content_main_block_h2'></h2><h3 class='content_main_block_h3'></h3></div><div class='content_main_block_img'></div>");
			$(".content_main_block_3").append(content_main_block_body_3);
			$(".content_main_block_h2").eq(2).text("比想象中更出色");
			$(".content_main_block_h3").eq(2).text("在精美的 28 英寸 PixelSense™ 显示屏上素描和绘画。 创新的零重力折叶让您只用一只手就能轻松移动显示屏，以直立的桌面模式或下移的工作室模式工作。与团队成员协作和共享工作。支持专业级阮籍。通过面部识别技术登录");
			var colors=$("<div class='colors'>多种颜色可供选择</div>");
			$(".content_main").append(colors);
			var color_change=$("<div class='color_change'><div class='red'></div><div class='gray'></div><div class='blue'></div></div>");
			$(".content_main").append(color_change);
			//点击改变颜色
			$(".red").click(function(){
				$('.content_main_block_4').css({
					"background-image": 'url(images/Content/Content-red.png)',
				});
			});
			$(".gray").click(function(){
				$('.content_main_block_4').css({
					"background-image": 'url(images/Content/Content-gray.png)',
				});
			});
			$(".blue").click(function(){
				$('.content_main_block_4').css({
					"background-image": 'url(images/Content/Content-blue.png)',
				});
			});
			//第一块
			$(".content_main_block_txt").eq(0).animate({
				"left": "0px"},
				1500, );
			$(".content_main_block_img").eq(0).animate({
				right: "38px"},
				1500, );
			//为了防止无聊的用户一次性拖到下面看效果，故设置为执行完一次出现后1.5s才能再次执行洗一次动画
			setTimeout(function() {
				var timer1 = setInterval(function() {
					if (document.documentElement.scrollTop >= 580) {
						var second = true;
						$(".content_main_block_txt").eq(1).animate({
								"right": "0px"
							},
							1500, );
						$(".content_main_block_img").eq(1).animate({
								left: "0px"
							},
							1500, );		
						clearInterval(timer1);
						setTimeout(function() {
							var timer2 = setInterval(function() {
								if (document.documentElement.scrollTop >= 1060) {
									$(".content_main_block_txt").eq(2).animate({
											"left": "0px"
										},
										1500, );
									$(".content_main_block_img").eq(2).animate({
											right: "0px"
										},
										1500, );	
									clearInterval(timer2);
									setTimeout(function() {
										var timer3 = setInterval(function() {
											if (document.documentElement.scrollTop >= 1550) {
												$(".content_main_block_4,.colors,.color_change").animate({
													"opacity": "1"
												}, 2000, )
													clearInterval(timer3);
											}
										}, 10)
									}, 300)
								}
							}, 10)
						}, 300)
					}
				}, 10)
			}, 300)
	});//main的动画
});//了解更多的click执行效果
$(".navigation-li").eq(1).click(function(event){
	product_count++;
	if(product_count==1){
		if(num==2){
		$(".content_main").remove();
		}
		else if(num==1){
			main.remove()
		};//不管在内容页还是首页都要移除下面的东西
		$(".header").animate({
			height:"240px"
		},2000,);//记得改回2000
		$(".header-body-body").animate({
			top:"-800px"
		},2000,)//记得改回2000
		var product_main=$("<div class='product_main'></div>");
		$(".header").after(product_main);
		var product_surface=$("<div class='product_surface parent'><h2>Surface Studio 焕新登场</h2><img src='images/List/List-surface.png'></div>");
		$(".product_main").append(product_surface);
		var product_list=$("<div class='product_list'><h2>超越您对笔记本的想象</h2><div class='product_list_show'></div></div>");
		$(".product_main").append(product_list);
		var product_list_block_1=$("<div class='product_list_block'><img src='images/List/List-1.png'/><h3>Surface Pro</h3></div>");
		$(".product_list_show").append(product_list_block_1);
		var product_list_block_2=$("<div class='product_list_block'><img src='images/List/List-2.png'/><h3>Surface Laptop</h3></div>");
		$(".product_list_show").append(product_list_block_2);
		var product_list_block_3=$("<div class='product_list_block'><img src='images/List/List-3.png'/><h3>Surface Book</h3></div>");
		$(".product_list_show").append(product_list_block_3);
		var product_list_buy=$("<h4>立即购买</h4>");
		$(".product_list_block").append(product_list_buy);
		$(".product_surface").animate({
			opacity:"1"
		},2000);
		$(".product_list").animate({
			marginTop:"0"
		},2000)
		num=3;
	}
});
//首页页
var arrow=true;//true表示顺时针，false表示逆时针
var circle_show_left;
var circle_show_right;
var timeout_left;
var timeout_right;
var finished=false;//判断是否移动到位，移动到位后为true，方可清除并生成图片，若中途被打断，则不清除并生成
function arrow_left(){
	if(arrow==true){
		$(".homepage-product2-img").stop(true,false)
		clearInterval(circle_show_right);
		clearTimeout(timeout_right);
		circle_show_left=setInterval(function(){
		    finished=false;
			$(".homepage-product2-img").eq(0).animate({
				left: "-1098px",
			}, 1000);
			$(".homepage-product2-img").eq(1).animate({
				left: "-549px",
			}, 1000);
			$(".homepage-product2-img").eq(2).animate({
				left: "0px",
			}, 1000,function(){
				finished=true;
			});
			arrow=false;
			timeout_left=setTimeout(function() {
				if(finished==true){
					$(".homepage-product2-img").eq(0).remove();
					$(".circle-show").append("<img class='homepage-product2-img' src='images/HomePage/HomePage-Product2.png'>")
					$(".homepage-product2-img").eq(0).css({
						left: '-549px',
					});
					$(".homepage-product2-img").eq(1).css({
						left: '0px',
					});
					$(".homepage-product2-img").eq(2).css({
						left: '549px',
					});//初始化
				}
			}, 1050)
		},2000)
	}
}
function arrow_right(){
	if(arrow==false){
		$(".homepage-product2-img").stop(true,false)
		clearInterval(circle_show_left);
		clearTimeout(timeout_left);
		circle_show_right=setInterval(function(){		
			finished=false;
			$(".homepage-product2-img").eq(0).animate({
				left: "0px",
			}, 1000);
			$(".homepage-product2-img").eq(1).animate({
				left: "549px",
			}, 1000);
			$(".homepage-product2-img").eq(2).animate({
				left: "1098px",
			}, 1000,function(){
				finished=true;
			});
			arrow=true;
			timeout_right=setTimeout(function() {
					if(finished==true){
						$(".homepage-product2-img").eq(2).remove();
						$(".circle-show").prepend("<img class='homepage-product2-img' src='images/HomePage/HomePage-Product2.png'>")	
						$(".homepage-product2-img").eq(0).css({
							left: '-549px',
						});
						$(".homepage-product2-img").eq(1).css({
								left: '0px',
						});
						$(".homepage-product2-img").eq(2).css({
								left: '549px',
						});	//初始化
					}		
			}, 1050)
		},2000)
	}
}
$(".navigation-li").eq(0).click(function(){
	product_count=0;
    if(num==2){
    	$(".content_main_block_txt").eq(0).animate({
				"left": "-1200px"},
				1500, );
		$(".content_main_block_img").eq(0).animate({
				right: "-1200px"},
				1500, );
		$(".content_main_block_txt").eq(1).animate({
				"right": "-1200px"},
				1500, );
		$(".content_main_block_img").eq(1).animate({
				left: "-1200px"},
				1500, );
		$(".content_main_block_txt").eq(2).animate({
				"left": "-1200px"},
				1500, );
		$(".content_main_block_img").eq(2).animate({
				right: "-1200px"},
				1500, );
		$(".content_main_block_4,.colors,.color_change").animate({
													"opacity": "0"
												}, 1500, )
		setTimeout(function(){
			$(".content_main").remove();
			$(".header").after(main);
			$(".homepage-device").animate({
					marginTop: "90px"
				},
				2000)
			// clearInterval(circle_show_right);
			// clearInterval(circle_show_left);
			$(".homepage-arrow-left").click(function() {
				arrow_left();
			});
			$(".homepage-arrow-right").click(function() {
				arrow_right();
			});

		}, 1500)
    	
    }
    if(num==3){
    	$(".product_main").remove();
    	$(".header").after(main);
    	$(".main").css({
    		opacity: '0',
    	});
    	$(".main").animate({
    		opacity:"1",
    	},2000)
    	$(".header").animate({
			height:"830px"
		},2000,);//记得改回2000
		$(".header-body-body").animate({
			top:"213px"
		},2000,);//记得改回2000
		$(".homepage-device").animate(
		{marginTop:"90px"},
		2000)
		// clearInterval(circle_show_right);
		// clearInterval(circle_show_left);
		$(".homepage-arrow-left").click(function() {
			arrow_left();
		});
		$(".homepage-arrow-right").click(function() {
			arrow_right();
		});
    }
    num=1;
})
$(".homepage-product2-img").eq(0).css({
	left: '-549px',
});
$(".homepage-product2-img").eq(2).css({
	left: '549px',
});

$(".homepage-arrow-left").click(function(){
	arrow_left();
});
$(".homepage-arrow-right").click(function(){
	arrow_right()
});
circle_show_right=setInterval(function(){
	finished=false;		
		//初始化
		$(".homepage-product2-img").eq(0).animate({
			left: "0px",
		}, 1000);
		$(".homepage-product2-img").eq(1).animate({
			left: "549px",
		}, 1000);
		$(".homepage-product2-img").eq(2).animate({
			left: "1098px",
		}, 1000,function(){
			finished=true;
		});
		setTimeout(function() {
			if(finished==true){
				$(".homepage-product2-img").eq(2).remove();
				$(".circle-show").prepend("<img class='homepage-product2-img' src='images/HomePage/HomePage-Product2.png'>")
				$(".homepage-product2-img").eq(0).css({
				left: '-549px',
				});
				$(".homepage-product2-img").eq(1).css({
						left: '0px',
				});
				$(".homepage-product2-img").eq(2).css({
						left: '549px',
				});
			}		
		}, 1050)
	
},2000)