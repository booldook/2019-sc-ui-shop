var rotateChk = true;
$(".box3").click(function(){
	if(rotateChk) {
		$(this).css({"transform": "rotate(1800deg)"});
		rotateChk = false;
	}
	else {
		$(this).css({"transform": "rotate(0deg)"});
		rotateChk = true;
	}
});
