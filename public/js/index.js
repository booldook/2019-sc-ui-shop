// navi-bar
$(".navi > li").mouseover(function(){
	switch($(this).index()) {
		case 0:
		case 3:
			$(this).find(".navi-subs").css({"display":"flex"});
			break;
		case 1:
		case 2:
		case 4:
			$(this).find(".navi-subs").css({"display":"block"});
			break;
	}
	$(this).find(".navi-bar").addClass("navi-bar-hover");
	$(this).find(".navi-subs").stop().animate({"top":"2.5rem", "opacity":1}, 500);
});
$(".navi > li").mouseleave(function(){
	$(this).find(".navi-bar").removeClass("navi-bar-hover");
	$(this).find(".navi-subs").stop().animate({"top":"5rem", "opacity":0}, 500, function(){
		$(this).css({"display":"none"});
	});
});