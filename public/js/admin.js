// Include 실행
includeHTML();

// Include 함수
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
						// 상단 네비게이션
						$(".navi > li").mouseenter(function(){
							$(this).find(".navi-sub").css({"opacity":0, "display":"block"});
							$(this).find(".navi-sub").stop().animate({"opacity":1, "top":"34px"}, 300);
						});
						$(".navi > li").mouseleave(function(){
							$(this).find(".navi-sub").stop().animate({"opacity":0, "top":"80px"}, 300, function(){
								$(this).css({"display":"none"});
							});
						});
					}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			} 
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}