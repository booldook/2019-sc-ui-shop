/* 
/ajax/top/r : 1차카테고리
/ajax/top/r2/3 : 1차카테고리의 1,2,3,4,5 의 2,3차 카테고리
*/

$("#bt1").click(function(){
	$.ajax({
		type: "get",
		url: "/ajax/top/r",
		dataType: "json",
		success: function (res) {
			var html = '<ul class="d-flex justify-content-center">';
			for(var i=0 in res) {
				//console.log(res[i].catename);
				html += '<li class="border p-2" onclick="go(\''+res[i].catelink+'\');">'+res[i].catename+'</li>';
			}
			html += '</ul>';
			//console.log(html);
			$(".tx_area").html(html);
		}
	});
});

$("#bt2").click(function(){
	$.ajax({
		type: "get",
		url: "/ajax/top/r2/2",
		dataType: "json",
		success: function (res) {
			console.log(res);
		}
	});
});

$("#bt_reset").click(function(){
	$(".tx_area").empty();
});

function go(url) {
	location.href = url;
}