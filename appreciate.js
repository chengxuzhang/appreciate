/*
 *	赞赏功能  v1.0
 *	@author 代码功 
 *	@email 1066443079@qq.com
 */
;(function(){
	window.onload = function(){
		var appBtn = document.getElementById('appreciate');
		appBtn.onclick = function(){
			var cover = document.createElement("div");
				cover.setAttribute("style","opacity:0.6;width:100%;height:100%;position:fixed;left:0px;top:0px;background-color:black;");
				cover.onclick = function(){
					cover.remove();
				}
			document.getElementsByTagName("body")[0].append(cover);
		}
	}
})();