// $(function(){
// 	var index = 0;
// 	$(".num li").mouseover(function(){
// 		showImg(index);
// 	}).eq(0).mouseover();
// })



$(function(){
	var len = $(".num > li").length;
	var index = 0;
	var adTimer;
	$(".num li").mouseover(function(){
		index = $(".num li").index(this);
		showImg(index);	
	}).eq(0).mouseover();
//滑入停止动画，滑出开始动画
	$(".ad").hover(function(){
		clearInterval(adTimer);
	},function(){
		addTimer = setInterval(function(){
			showImg(index);
			index++;
			if (index == len) {index=0;}
		},3000);
	}).trigger("mouseleave");
})

//通过控制top来显示不同的幻灯片
function showImg(index){
	var adHeight = $(".content_right .ad").height();
	$(".slider").stop(true,false).animate({top:-adHeight*index},1000);
	$(".num li").removeClass("on")
		.eq(index).addClass("on");
};


