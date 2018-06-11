$(document).ready(function(){
	//shutcut 下拉
	var oIn = $(".in");
	oIn.hover(function(){
		$(this).addClass("hov");
	},function(){
		$(this).removeClass("hov");
	})
	
	
	//搜索框获得焦点
	var oSearchTxt = $(".searchTxt");
	oSearchTxt.focus(function(){
		oSearchTxt.attr("placeholder","");
	})
	oSearchTxt.blur(function(){
		oSearchTxt.attr("placeholder","商品搜索");
	})
	
	
	/*-----------------------------banner轮播 start--------------------------*/
	var otime;
	var oPic = $(".pic");
	var oBanner = $(".banner");
	var bSpan = $(".banner span");
	var _index = 0;
	var tLi = $(".tag li");//所有的数字按钮
	var bLeft = $(".bLeft");//左按钮
	var bRight = $(".bRight");//右按钮
	accord();
	oBanner.hover(function(){
		//关闭自动轮播
		clearInterval(otime);
		bSpan.show();
	},function(){
		accord();
		bSpan.hide();
	})
	//开始自动轮播
	function accord(){
		otime = setInterval(time,3000);
	}
	//鼠标滑过小按钮
	tLi.mouseover(function(){
		var $this = $(this);
		_index = $(this).index();
		oPic.stop(true).animate({marginLeft:-730*(_index)},"slow");
		$this.addClass("on").siblings().removeClass("on");
	})
	//鼠标点击切换
	bRight.click(function(){
		time();
	})
	//默认向右
	function time(){
		_index++;
		_index = _index%6;
		oPic.stop(true).animate({marginLeft:-730*(_index)},"slow");
		tLi.eq(_index).addClass("on").siblings().removeClass("on");
	}
	bLeft.click(function(){
		_index--;
		_index = (_index+6)%6;//+6是防止出现负数
		oPic.stop(true).animate({marginLeft:-730*(_index)},"slow");
		tLi.eq(_index).addClass("on").siblings().removeClass("on");
	})
	/*-----------------------------banner轮播 end--------------------------*/
	
	
	//产品导航列表
	var oDl = $(".proList dl");
	var oDt = $(".proList dl dt");
	var oDd = $(".proList dl dd");
	oDl.hover(function(){
		var num = $(this).index();
		$(this).addClass("mous").siblings().removeClass("mous");
		oDd.eq(num).show();
	},function(){
		$(this).removeClass("mous");
		oDd.hide();
	})
	
	
	/*-----------------------------精选产品轮播效果start--------------------------*/
	var oJc = $(".jc");
	var jSpan = $(".jc span");
	var jUl = $(".jc ul");
	var jLeft = $(".jLeft");
	var jRight = $(".jRight");
	var _jIndex = 0;
	oJc.hover(function(){
		jSpan.show();
	},function(){
		jSpan.hide();
	})
	//左右切换
	jRight.click(function(){
		_jIndex++;
		_jIndex = _jIndex%4;
		jUl.stop(true).animate({marginLeft:-1000*_jIndex},0);
	})
	jLeft.click(function(){
		_jIndex--;
		_jIndex = (_jIndex+4)%4;
		jUl.stop(true).animate({marginLeft:-1000*_jIndex},0);
	})
	/*-----------------------------精选产品轮播效果end--------------------------*/
	
	
	//猜你喜欢切换
	var gRight = $(".gRight");
	var gLi = $(".gc ul li");
	var _gIndex = 3;
	gRight.click(function(){
		_gIndex++;
		_gIndex = _gIndex%3;
		gLi.eq(_gIndex).show().siblings().hide();
	})
	
	
	/*-----------------------------floor产品start--------------------------*/
	var oW = document.getElementsByClassName("w");
	var oWl = oW.length;
	var _wIndex;
	var _fIndex;
	//楼梯右侧产品选项卡切换
	for(var i=0; i<oWl; i++){
		oW[i].index = i;
		oW[i].onmouseover = function(){
			var _wIndex = this.index;
			$(".floor:eq("+_wIndex+") .ft ul li").mouseover(function(){
				$(this).addClass("hover").siblings().removeClass("hover");
				$(".floor:eq("+_wIndex+") .fc ul li").eq($(this).index()).show().siblings().hide();
			})
		}
	}
	//楼梯选项卡显示或隐藏
	//滚动页面，楼梯选项卡显示当前的产品
	var $f1 = $(".floor").eq(0).offset().top;
	var $fLength = $(".floor").length;
	var $wHeight = $(window).height()*0.5;
	$(window).scroll(function(){
		if( $(window).scrollTop() > $f1 ){
			$(".elevator").show();
		}else{
			$(".elevator").hide();
		}
		var $wSt = $(window).scrollTop();
		for(var i=0; i<$fLength; i++){
			var $t = $(".floor").eq(i).offset().top - $wSt;
			if( $t < $wHeight ){
				$(".elevator a").eq(i).addClass("in").siblings().removeClass("in");
			}
		}
	})
	//点击楼梯选项卡，定位到具体的产品位置
	$(".elevator a").click(function(){
		var _eIndex = $(this).index();
		//alert(_eIndex);
		var $top = $(".floor").eq(_eIndex).offset().top;
		$("html,body").stop(true).animate({"scrollTop":$top},500);
	})
	/*-----------------------------floor产品end--------------------------*/
})