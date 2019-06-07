// navi-bar
$(".navi > li").mouseover(function(){
	$(this).find(".navi-bar").addClass("navi-bar-hover");
});
$(".navi > li").mouseleave(function(){
	$(this).find(".navi-bar").removeClass("navi-bar-hover");
});