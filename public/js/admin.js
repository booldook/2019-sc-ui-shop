// Include 실행
includeHTML();

// Include 함수
function includeHTML() {
	var z, i, elmnt, file, xhttp;
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
						// 서버에서 불러온 html이 본 문서에 적용 된 후
						$.ajax({
							type: "get",
							url: "/ajax/top/r2/2",
							dataType: "json",
							success: function (res) {
								var html = '';
								html += '<ul class="navi-sub">';
								for(var i in res) {
									if(res[i].lev == 0)
									html += '<li class="link-elm" data-url="'+res[i].link+'">'+res[i].title+'</li>';
								}
								html += '</ul>';
								$(".navi > li").eq(1).append(html);
								$(".navi > li").mouseenter(function(){
									$(this).find(".navi-sub").css({"opacity":0, "display":"block"});
									$(this).find(".navi-sub").stop().animate({"opacity":1, "top":"34px"}, 300);
								});
								$(".navi > li").mouseleave(function(){
									$(this).find(".navi-sub").stop().animate({"opacity":0, "top":"80px"}, 300, function(){
										$(this).css({"display":"none"});
									});
								});
								$(".link-elm").click(function(){
									var url = $(this).data("url");
									var tar = $(this).data("tar");
									if(tar == "_blank") window.open(url);
									else location.href = url;
								});
							}
						});
					}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			} 
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}