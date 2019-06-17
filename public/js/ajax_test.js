$("#bt1").click(function(){
	$.ajax({
		type: "get",
		url: "/ajax/top/r",
		dataType: "json",
		success: function (res) {
			console.log(res);
			var html = '';
			for(var i in res) {
				html += res[i].id+' / '+res[i].catename+' / '+res[i].catelink+' / '+res[i].pos+'<br>';
			}
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
			var html = '';
			for(var i in res) {
				html += res[i].id+' / '+res[i].catename+' / '+res[i].catelink+' / '+res[i].pos+'<br>';
			}
			$(".tx_area").html(html);
		}
	});
});

$("#bt_reset").click(function(){
	$(".tx_area").empty();
});