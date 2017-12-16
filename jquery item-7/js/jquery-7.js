var i_1=0;
var i_2=0;
var i_3=0;//只有第一次点击时可以创建新元素，删除时归零
//i表示第几个，用来显示当前指定元素对应的标签页，隐藏其他
function Num(i){
	$(".content").css('display', 'none');
	$(".content").eq(i).css('display', 'block');
}//使内容页得以显现
function Active(k){
	if($('.content').eq(k).css('display')=="block"){
		return true
	}
	else{
		return false
	}
}//判断是否在当前页面
$(".navigation-li").eq(1).click(function(){
	i_1++;
	if(i_1==1){
		var tab=$("<li class='tab tab1 rest'><p>页面1</p><span class='close close1'>×</span></li>");
		$(".pages").append(tab);	
	}	
	//点击左侧时
	Num(1);//变内容
	$(".tab").css('border', '1px solid transparent');
	//变标签
	if(Active(1)==true){
		$(".tab").addClass('rest');
		$('.tab').removeClass('active');
		$(".tab1").removeClass('rest');
		$(".tab1").addClass('active')
	}
	//点击标签时
	$(".tab1").click(function(){
		Num(1);
		$(".tab").css('border', '1px solid transparent');
		if (Active(1) == true) {
			$(".tab").addClass('rest');
			$('.tab').removeClass('active');
			$(".tab1").removeClass('rest');
			$(".tab1").addClass('active')
		}		
	})
	if(i_1==1){//不能点击左边导航栏就添加一次函数，要只能生产一次click函数
		$(".close1").click(function(event) {//删除
	         var order=$(".close").index(this);
	         i_1=0;//删除后就清零，方便下一次添加
	         $(".tab1").remove();
	         $(".tab").addClass('rest');
			 $('.tab').removeClass('active');
			 $(".tab").eq(order).removeClass('rest');
			 $(".tab").eq(order).addClass('active');
			 $(".content").css('display', 'none');
			 if($(".tab").eq(order).is(".tab0")==true){
			 	$(".content").eq(0).css('display', 'block');
			 }
			 else if($(".tab").eq(order).is(".tab1")==true){
			 	$(".content").eq(1).css('display', 'block');
			 }
			 else if($(".tab").eq(order).is(".tab2")==true){
			 	$(".content").eq(2).css('display', 'block');
			 }
			 else if($(".tab").eq(order).is(".tab3")==true){
			 	$(".content").eq(3).css('display', 'block');
			 }	 
		});
	}
})
$(".navigation-li").eq(2).click(function(){
	i_2++;
	if(i_2==1){
		var tab=$("<li class='tab tab2 rest'><p>页面2</p><span class='close close2'>×</span></li>");
		$(".pages").append(tab);	
	}	
	Num(2);
	$(".tab").css('border', '1px solid transparent');
	if(Active(2)==true){
		$(".tab").addClass('rest');
		$('.tab').removeClass('active');
		$(".tab2").removeClass('rest');
		$(".tab2").addClass('active')
	}
	$(".tab2").click(function(){
		Num(2);
		$(".tab").css('border', '1px solid transparent');
		if (Active(2) == true) {
			$(".tab").addClass('rest');
			$('.tab').removeClass('active');
			$(".tab2").removeClass('rest');
			$(".tab2").addClass('active')
		}		
	})
	if(i_2==1){
		$(".close2").click(function(event) {
	         var order=$(".close").index(this);
	         i_2=0;
	         $(".tab2").remove();
	         $(".tab").addClass('rest');
			 $('.tab').removeClass('active');
			 $(".tab").eq(order).removeClass('rest');
			 $(".tab").eq(order).addClass('active');
			 $(".content").css('display', 'none');
			 if($(".tab").eq(order).is(".tab0")==true){
			 	$(".content").eq(0).css('display', 'block');
			 }
			 else if($(".tab").eq(order).is(".tab1")==true){
			 	$(".content").eq(1).css('display', 'block');
			 }
			 else if($(".tab").eq(order).is(".tab2")==true){
			 	$(".content").eq(2).css('display', 'block'); 	
			 }
			 else if($(".tab").eq(order).is(".tab3")==true){
			 	$(".content").eq(3).css('display', 'block');
			 }
		});
	}
})
$(".navigation-li").eq(3).click(function(){
	i_3++;
	if(i_3==1){
		var tab=$("<li class='tab tab3 rest'><p>页面3</p><span class='close close3'>×</span></li>");
		$(".pages").append(tab);	
	}
	Num(3);
	$(".tab").css('border', '1px solid transparent');
	if(Active(3)==true){
		$(".tab").addClass('rest');
		$('.tab').removeClass('active');
		$(".tab3").removeClass('rest');
		$(".tab3").addClass('active')
	}
	$(".tab3").click(function(){
		Num(3);
		$(".tab").css('border', '1px solid transparent');
		if (Active(3) == true) {
			$(".tab").addClass('rest');
			$('.tab').removeClass('active');
			$(".tab3").removeClass('rest');
			$(".tab3").addClass('active')
		}
	})
	if(i_3==1){
		$(".close3").click(function(event) {
         var order=$(".close").index(this);
         i_3=0;
         $(".tab3").remove();
         $(".tab").addClass('rest');
		 $('.tab').removeClass('active');
		 $(".tab").eq(order).removeClass('rest');
		 $(".tab").eq(order).addClass('active');
		 $(".content").css('display', 'none');
		 if($(".tab").eq(order).is(".tab0")==true){
		 	$(".content").eq(0).css('display', 'block');
		 }
		 else if($(".tab").eq(order).is(".tab1")==true){
		 	$(".content").eq(1).css('display', 'block');
		 }
		 else if($(".tab").eq(order).is(".tab2")==true){
		 	$(".content").eq(2).css('display', 'block');
		 }
		 else if($(".tab").eq(order).is(".tab3")==true){
		 	$(".content").eq(3).css('display', 'block');
		 }
	});
	}
})
$(".tab0").click(function(){
	Num(0);
	$(".tab").css('border', '1px solid transparent');
	$(".tab").addClass('rest');
	$('.tab').removeClass('active');
	$(".tab0").removeClass('rest');
	$(".tab0").addClass('active')
})