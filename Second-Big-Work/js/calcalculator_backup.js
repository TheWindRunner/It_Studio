function new_calculator(container,inputId){	
	    var contain=document.getElementById(container);
		var main=document.createElement("div");

		main.className="main";
		contain.appendChild(main);
		//插入main
		var textbox=document.createElement("input");
		main.appendChild(textbox);
        textbox.setAttribute("id",inputId);
       document.getElementById(inputId).value="0";
		textbox.type="text"
		textbox.className="show textbox";
		textbox.classList.add(container);
		textbox.name="val";
		textbox.disabled="disabled";
		//插入input框;
		var signblock=document.createElement("div");
		signblock.className="sign-block";
		main.appendChild(signblock)
		//插入键盘表;
		var percent=document.createElement("button");
		signblock.appendChild(percent);
		percent.className="sign change-button percent "
		percent.innerHTML="%";
		//插入百分号
		var root_=document.createElement("button");
		signblock.appendChild(root_);
		root_.className="sign change-button root";
		root_.name="root";
		root_.innerHTML="√";
		//插入根号
		var square=document.createElement("button");
		signblock.appendChild(square);
		square.className="sign change-button square";
		square.innerHTML="x²";
		//插入平方；
		var upDown=document.createElement("button");
		signblock.appendChild(upDown);
		upDown.className="sign change-button reciprocal";
		upDown.name="upDown";
		upDown.innerHTML="1/X";
		//插入倒数
        var CE=document.createElement("button");
        signblock.appendChild(CE);
        CE.className="sign ClearEntry change-button";
        CE.name="CE";
        CE.innerHTML="CE";
        //插入CE；
        var C=document.createElement("button");
        signblock.appendChild(C);
        C.className="sign clear change-button";
        C.name="C";
        C.innerHTML="C";
        //插入C;
        var back=document.createElement("button");
        signblock.appendChild(back);
        back.className="sign change-button backspace";
        back.name="back";
        back.innerHTML="←";
        //插入退格键
        var div=document.createElement("button");
        signblock.appendChild(div);
        div.className="sign calculate-button";
        div.name="div";
        div.innerHTML="÷";
        //插入除号   
        var seven=document.createElement("button");
        signblock.appendChild(seven);
        seven.innerHTML="7";
        seven.name="seven";
        //插入7；
        var eight=document.createElement("button");
        signblock.appendChild(eight);
        eight.innerHTML="8";
        eight.name="eight";
        //插入8；
        var nine=document.createElement("button");
        signblock.appendChild(nine);
        nine.innerHTML="9";
        nine.name="nine";
        //插入9；
        var multi=document.createElement("button");
        signblock.appendChild(multi);
        multi.className="sign calculate-button";
        multi.name="multi";
        multi.innerHTML="×";
        //插入乘号
        var four=document.createElement("button");
        signblock.appendChild(four);
        four.innerHTML="4";
        four.name="four"; 
        //插入4；
        var five=document.createElement("button");
        signblock.appendChild(five);
        five.innerHTML="5";
        five.name="five";
        //插入5；
        var six=document.createElement("button");
        signblock.appendChild(six);
        six.innerHTML="6";
        six.name="six";
        //插入6；
        var minus=document.createElement("button");
        signblock.appendChild(minus);
        minus.className="sign calculate-button";
        minus.name="minus";
        minus.innerHTML="-";
        //插入减号；
        var one=document.createElement("button");
        signblock.appendChild(one);
        one.innerHTML="1";
        one.name="one";
        //插入1；
        var two=document.createElement("button");
        signblock.appendChild(two);
        two.innerHTML="2";
        two.name="two";
        //插入2；
        var three=document.createElement("button");
        signblock.appendChild(three);
        three.innerHTML="3";
        three.name="three";
        //插入3；
        var plus=document.createElement("button");
        signblock.appendChild(plus);
        plus.className="sign calculate-button";
        plus.name="plus";
        plus.innerHTML="+";
        //插入加号；
        var oppo=document.createElement("button");
        signblock.appendChild(oppo);
        oppo.className="sign change-button oppo";
        oppo.name="oppo";
        oppo.innerHTML="±";
        //插入变号符
        var zero=document.createElement("button");
        signblock.appendChild(zero);
        zero.name="zero";
        zero.innerHTML="0";
        //插入0；
        var dot=document.createElement("button");
        signblock.appendChild(dot);
        dot.className="sign dot-button dot";
        dot.name="dot";
        dot.innerHTML=".";
        //插入点号
        var equal=document.createElement("button");
        signblock.appendChild(equal);
        equal.className="sign equal-button";
        equal.name="equal";
        equal.innerHTML="=";

        function num(obj){
          obj.className="sign number-button";
        }
        num(zero);
        num(one);num(two);num(three);num(four);num(five);num(six);num(seven);num(eight);num(nine);
       
   
//按钮分主要分为四类，输入（数字）、运算符（加减乘除）、计算（等号）变换（变号、开方，乘方，倒数，百分号）
var inputTemp;//输入框，暂时储存
var first="0";//第一操作数
var second;//第二操作数
var pointer=1;//指针
var operator;//存储操作符
var length_1;
var length_2;//计算第一和第二操作数的长度，用来退格。//不过后面好像证明并没有用
var type=1;//用来判断刚刚按了什么按钮，数字+CE+输入+点号type=1（表示为输入状态），运算符type=2，等号type=3，变换type=4；
var ifError=false;//判断是否出现error，如果除数为0或者根号内为负数，弹出error，并且部分按钮不可点击
var second_1;
var operator_1;
$(".number-button").click(function(){
	 if(ifError==true){
     	recover();
     } 
    if(type==3){
    	// first=0;
    	second=0;
    	pointer==1;
    }//type=3，表示刚刚按过等号，那么如果再输入数字，则清零
	if( type!==3 && operator && first && (!second) ){
				//如果刚刚未进行过运算，且仅仅有第一操作数和运算符，第二操作数还未定义，就将对第二个数进行操作
			pointer = 2;		
			document.getElementById(inputId).value = 0;
			}
	if(type==3 && pointer == 1){
			document.getElementById(inputId).value = 0;
			recover();
			
			}
	inputTemp = textbox;
	if( inputTemp.value == "0" ||type==4){ 
			inputTemp.value = this.innerHTML; //如果还没有进行第一个数字的输入的话，就输入或者进行过单目运算，那么清零,变为按下的值
			}
	  else   if(type==1){
	    	if (inputTemp.value=="0."){
	    		inputTemp.value+=this.innerHTML
	    	}
			else{inputTemp.value = inputTemp.value + this.innerHTML+"";
		    }
				//连接其余数字
	    }
	if(pointer == 1){
				first = inputTemp.value;//将最终值赋给first	
			} 
		else if(pointer == 2){
				second = inputTemp.value;
			} 
    type=1;			        
	});
//进行加减乘除的运算
$(".calculate-button").click(function(){
	if(type!==2&&type!==3){//例，如果9*+，不能变为0，type=2表示上一个是运算符，若再变号，则不能进行运算。如果type=3，则表示刚进行按过等号，进行过运算，first=first（）second，second还未置零，则此时不能进行下一步运算,此处又删掉
		if(operator=="+"){
			first=((first-0)*10+(second-0)*10)/10;
			      }
		if(operator=="×"){
			first=((first-0)*10*(second-0)*10)/100;
		}
		if(operator=="÷"){
			if (second==0){
				first="Error";
               ifError=true;
               forbidden()
			}
			else{first = (first - 0)/(second - 0);}
		}	
		if(operator=="-"){
			first=((first-0)*10-(second-0)*10)/10;
		}//用来清除浮点数
    } 
	inputTemp=textbox;
	inputTemp.value = first;	
	//如果已经存在了运算符，说明不是第一次运算，则把前面储存的第一和第二个数进行运算,用来连续运算。	 		
	operator = this.innerHTML;
		 	//记录运算符
    if(pointer == 1){
		 	//如果第一个数已经被输入，则转向第二个数进行输入
		 	pointer=2;
		 	}
	
	while(
    	first.substring(first.length-1,first.length)=="0"&&first.indexOf(".")!=-1
    )
	{ first=first.substring(0,first.length-1);
    	document.getElementsByName("val")[0].value=first;
    }
    if(first.length>=2){	 	
		if(first.substring(first.length-1,first.length)=="."){//6.变成6
			first=first.substring(0,first.length-1);
			document.getElementById(inputId).value=first;
		}
	}
	if(first.length>=3&&first.substring(first.length-1,first.length)=="0"&&first.substring(first.length-2,first.length-1)=="."){
         first=first.substring(0,first.length-2);
         document.getElementById(inputId).value=first;
		}//如果6.+，显示为6;
	//只有在数字的长度大于等于2时，才用得着也才可以判断最后一位是否为点号。若只有一位，则出错
	// if(second){
	// 	if(second.substring(second.length-1,second.length)=="."){
	// 		second=second.substring(0,second.length-1);
	// 		document.getElementById(inputId).value=second;
	// 	} 
	// }//这里好像可以不用管。。。。第二操作数直接运算
	pointer=2; 	
	second = 0;
		 	//清空第二操作数，不影响下一次运算
	type=2;	 
});
$(".equal-button").click(function(event) {//等于号
	if(!second&&type!==1){//表示并没有进行输入，解决9*ce=0;
		 //当按下运算符后第二操作数为0，第一操作数已经是第一次算好的结果，若是再按运算符且第二个数未输入的话，则自运算。					 	
		 second = first;
		            }	
    // if(second==0){
    //  	second=first;//这里思路有点混乱，到时候再回来看
    //  }
    if(type==3||((type==1||type==4)&&pointer==1)){
    	operator=operator_1;
    	second=second_1;
    	operator_1=undefined;
    	second_1=undefined;
    }//type=3,表示刚刚按过等号，用以实现连乘，连加等,(type==1或者type==4)&&pointer==1表示正对第一操作数进行操作（单目运算也是对这个数进行操作），若刚刚进行过运算，则把清除的operator和second还原，若是一次新运算，则不影响operator_1和second_1变为初始状态，以免影响到后面运算。
	if(operator=="+"){
		first=((first-0)*10+(second-0)*10)/10;
		      }
	if(operator=="×"){
		first=((first-0)*10*(second-0)*10)/100;
	}
	if(operator=="÷"){
		if(second==0){
			
            ifError=true;
            forbidden();
            first="Error";
		}
		else 
		{first = (first - 0)/(second - 0);}
	}	
	if(operator=="-"){
		first=((first-0)*10-(second-0)*10)/10;
	}	      	 		
	if(operator){	 			
		 	//隐式转换成数字类型，避免变成字符串连接运算	 		
		 	inputTemp=textbox;
	        inputTemp.value = first;	 			
		 			//将结算结果送到标签的value属性里面，显示出first的值
		 	pointer = 1;
		 			//因为将计算结果保存在first中并显示 所以指针指向first
		 		}
	while(
    	first.substring(first.length-1,first.length)=="0"&&first.indexOf(".")!=-1
    )
	{ first=first.substring(0,first.length-1);
    	document.getElementsByName("val")[0].value=first;
    }	 		
	if(first.length>=2){	 	
		if(first.substring(first.length-1,first.length)=="."){
			first=first.substring(0,first.length-1);
			document.getElementById(inputId).value=first;
		}
	}	 			
	
	if(ifError==true&&(type==3||type==2||type==4)){
		recover();
	}//在error的时候且上一个按过等号，单目运算，双目运算时才能清零，否则前面除以0出错时运行的函数又被覆盖 
	second_1=second;
	operator_1=operator;
	inputTemp=null;
	
	operator=null;
	// first="0";//first不能置零。
	second=undefined;
	pointer=1;
	type=1;

    ifError=false; 
	type=3;	
});
$(".clear").click(function(){//执行Clear函数
	recover();
});
function recover(){
	inputTemp=null;
	document.getElementById(inputId).value=0;
	operator=null;
	first="0";
	second=undefined;
	pointer=1;
	type=1;
	$(".sign").removeAttr("disabled")
	if(ifError==true){
     	removeForbidden()
     }
    ifError=false; 
}
$(".ClearEntry").click(function(){//执行CE函数
	if(ifError==true){
     	recover();
     } 
    if(pointer==1){
    	first=0;
    	document.getElementById(inputId).value=0;
    }
    if(pointer==2){
    	second=0;
    	document.getElementById(inputId).value=0;
    }
    type=1;
});
$(".square").click(function(){//执行平方函数
   if(pointer==1){
   	first=first*first;
   	document.getElementById(inputId).value=first;
   }
   if(pointer==2){
   	    if (second==0){
   	    	second=first*first;
   	    }
   		else{second=second*second;}    
   	document.getElementById(inputId).value=second;
   }
   type=4;
});
$(".reciprocal").click(function(){//倒数函数
	if(pointer==1){
		if(first==0){
			first="Error";
            ifError=true;
            forbidden()
		}
   	else{first=1/first;}
   	document.getElementById(inputId).value=first;
   }
   if(pointer==2){//此时指向second
       if (type==1||type==4){//表示刚刚进行过数字的输入,或进行过单目运算
           if(second==0||second=="0"){//此处的second是数进去的，而不是默认的
            first="Error";
            ifError=true;
            forbidden()
            document.getElementById(inputId).value=first;
           }
           else{
           	second=1/second;
           	document.getElementById(inputId).value=second;
           }
       }
       if (type==2){//表示刚刚进行的的是双目运算符，例如2+倒数
          if (second==0){
    	   	second=1/first;
    	   }  
    	   document.getElementById(inputId).value=second;
       }
   }
   type=4;
});
$(".root").click(function(){//取根号
	if(pointer==1){
       if(first<0){
       	first="Error";
        ifError=true;
        forbidden()
       }
   	else{first=Math.sqrt(first);}
   	document.getElementById(inputId).value=first;
   }
   if(pointer==2&&second>=0){
   	    if(second==0){
	   	  	second=Math.sqrt(first);
	   	  	document.getElementById(inputId).value=second;
	   	}
   	  	else{second=Math.sqrt(second);
   	  		document.getElementById(inputId).value=second;
   	  	}
   	}
	if(pointer==2&&second<0){
	   		document.getElementById(inputId).value="Error";
	   		ifError=true;
	   		forbidden();//根号下为负数报错，此处有本来一个很奇怪的现象。。
	   	}
   type=4;
});
$(".oppo").click(function(){//取相反数

	if(pointer==1){
		if(first=="0."){first="-0."}
   	else{first=-first+"";}
   	document.getElementById(inputId).value=first;
   }
   if(pointer==2){
   	if(second=="0."){second="-0."}//0.添负号变成-0.
   	  else if(second==0){
   	   	second=-first;//win10计算器中，当按下运算符后再直接按变号符，则把第二操作数变为第一操作数的相反数。
   	   }
   		else{second=-second;}
   	document.getElementById(inputId).value=second;
   }
 type=1;

});
$(".percent").click(function(){//取百分号
    if(pointer==1){
    	document.getElementById(inputId).value=0;
    	first=0;	
    }
    if(pointer==2){
    	second=first*second/100;
    	document.getElementById(inputId).value=second;
    }
    type=5;
});
$(".backspace").click(function(){//退格
	if(ifError==true){
     	recover();
     } 
    if(document.getElementById(inputId).value=="-0."){
    	document.getElementById(inputId).value="0";
    	 if(pointer==1){
    	 	first=document.getElementById(inputId).value
    	 }
    	 if(pointer==2){
    	 	second=document.getElementById(inputId).value
    	 }
    } //-0.退格成0
    if (type==1){
	   if(pointer==1){
	   	   first=first+"";//变成字符串好退格
	        if(first.length==2&&first.indexOf("-")==0){
		   	first=0;//如果是-9，-8这样的负数，退到0；
		   }
	       if(first.length>=2){//正数退格
		   first=first.substring(0,first.length-1);
		   }
		   else if(first.length=1){//只有一位退成0
		   	first=0;
		   }
	       document.getElementById(inputId).value=first;
	   }
	   if(pointer==2){
	   	second=second+"";
	      if(second.length==2&&second.indexOf("-")==0){
		   	second=0;//如果是-9，-8这样的负数，退到0；
		   }
	      if(second.length>=2){
		  second=second.substring(0,second.length-1);}
		  else if(second.length=1){
		  	second=0;
		  }
	      document.getElementById(inputId).value=second;
	   }
	   type=1;//可不写，不放在外面为了保持输入状态的连贯性。不可多次按退格键后变可退格
	
	}
});
$(".dot").click(function(){//加小数点，只有输入时能加小数点，运算后不能加小数点。如果在一开始加小数点，则变为0.，
	if(type==1){
	     if(pointer==1&&first.indexOf(".")==-1){
				first=first+".";
		
		    document.getElementById(inputId).value=first
		}
		 if(pointer==2&&second.indexOf(".")==-1){
		 	second=second+".";
		 	document.getElementById(inputId).value=second;
		 }	
 	 }//正常输入状态
 	 if (type==3){
 	 recover();
 	 first="0.";
     document.getElementById(inputId).value=first;
 	 }
 	 if(type!==1&&type!==3){
 	 	if(pointer==1){ 		
	 	 	first="0.";
	 	 	document.getElementById(inputId).value=first;	 	      
	 	 }
	 	if(pointer==2){
		 	 if(second==0){
		 	 	second="0.";
		 	 	document.getElementById(inputId).value=second;
		 	 }
	 	} 
	 }//非输入状态，进行过其他运算
 	 type=1;
});
function forbidden(){
	// $(".change-button").attr('disabled',"true");
	// $(".calculate-button").attr("disabled","true")
	// $(".dot").attr("disabled","true")
 //    $(".backspace,.ClearEntry,.clear").removeAttr("disabled");
    $(".sign").attr("disabled","true");
    $(".clear").removeAttr("disabled");
	document.getElementById(inputId).value="Error"
	}
function removeForbidden(){
	$(".sign").removeAttr("disabled");
	
}

}
new_calculator("thefirst","diyige");
new_calculator("thesecond","dierge");
 