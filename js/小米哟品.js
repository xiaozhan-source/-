// 菜单栏轮播图
$(function(){
	// 设置菜单栏图片轮播
	var i=0;
	$(".circle li").eq(0).css({background:'red'})
	$(".btn2").click(function(){
		if(i<6){
			i++
		}else{
			i=0
		}
		$(".mi_mdown_right").css({background:"url(./img/背景图/背景图"+i+".jpg) no-repeat",backgroundSize:"850px 358px"});
		$(".circle li").eq(i).css({background:'red'});
		$(".circle li").eq(i)
		.siblings()
		.css({background:'white'});
	})
	//设置图片自动轮播
	var time=setInterval(function(){
		$(".btn2").click()
	},2000)
	// $(".mi_mdown_right").mouseenter()
	$(".btn1").click(function(){
		if(i>0){
			i--
		}else{
			i=6;
		}
		$(".mi_mdown_right").css({background:"url(./img/背景图/背景图"+i+".jpg) no-repeat",backgroundSize:"850px 358px"});
		$(".circle li").eq(i).css({background:'red'});
		$(".circle li").eq(i).siblings().css({background:'white'});
	})
	
	
	// 菜单左侧分类隐藏
	var menuleft=$('.mdown_fenlei li');
	console.log($('.mdown_fenlei_img').eq(0))
	
	menuleft.mouseover(function(){
		var index=$(this).index();
		$('.mdown_fenlei_img').children().eq(index).css('display','block').siblings().css('display','none');
		
	})
	menuleft.mouseout(function(){
		$('.mdown_fenlei_img').children().css('display','none')
	})
	
	
	// 限时购倒计时
	
	// 小火箭
	$(window).scroll(function(){
		var xiaohuojian=$(document).scrollTop();
		$('.fixed_top').click(function(){
			$('html,body').stop().animate({'scrollTop':1},1000)
		})
		$('.fixed_top').mousemove(function(){
			$('.fixed_top div').css('background-position','0px -1323px')
			$('.fixed_top p').css('color','#845f3f')
		})
		$('.fixed_top').mouseout(function(){
			$('.fixed_top div').css('background-position','0px -1289px')
			$('.fixed_top p').css('color','#333333')
		})
	})
	// 限时购轮播图
	
})
window.onload=function(){
	//补零函数,当数字小于10时自动给前边添加0
	 function addZero(i) {
	              return i < 10 ? "0" + i: i + "";
	          }
			
	time=setInterval(function(){
	var nowtime=new Date();
	var endtime=new Date("2019/10/23,20:00:00")
	var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000);
	// var d=parseInt(lefttime/60/60/24)
	 h=parseInt(lefttime/60/60%24)
	 m=parseInt(lefttime/60%60)
	 s=parseInt(lefttime%60)
	// console.log(111)
	h=addZero(h);
	m=addZero(m);
	s=addZero(s);
	document.getElementsByClassName('tshop_hour')[0].innerHTML=h;
		// document.querySelector(".tshop_hour").innerHTML=h;
	document.querySelector(".tshop_men").innerHTML=m;
	document.querySelector(".tshop_sec").innerHTML=s;
	if(lefttime<=0){
			clearInterval(time)
			console.log(111)
		}
	},1000)
		
}
// 登录注册


// 限时购轮播图 
// 右侧悬浮窗鼠标移入事件
// 	