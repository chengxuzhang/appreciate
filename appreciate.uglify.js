!function(){window.onload=function(){function d(){Qr.parentNode.removeChild(Qr)}function e(){var b,c,d,e,f,a=window.Qr=document.createElement("div");for(a.className="qr",b=document.createElement("div"),b.className="qr-top",b.innerHTML='<li class="current" data-img="money.png">微信</li><li data-img="erweima.jpg">支付宝</li>',c=document.createElement("div"),c.className="qr-body",c.innerHTML='<img src="money.png">',a.appendChild(b),a.appendChild(c),document.getElementsByTagName("body")[0].appendChild(a),d=a.getElementsByTagName("li"),e=c.getElementsByTagName("img")[0],f=0;f<d.length;f++)d[f].onclick=function(){var a,b;for(a=0;a<d.length;a++)d[a].className="";this.className="current",b=this.getAttribute("data-img"),e.setAttribute("src",b)}}function f(){appWord.parentNode.removeChild(appWord),clearInterval(wTime)}function g(a){var f,h,i,b=a,d=100;document.getElementById("appWord")?f=window.appWord=document.getElementById("appWord"):(f=window.appWord=document.createElement("div"),f.id="appWord",f.className="app-word",document.getElementsByTagName("body")[0].appendChild(f)),h="今天老夫掐指一算#料定要有大事发生#原来是你要来施财#不跟你多BB，音响，灯光，摄像师准备#开始下雨咯&#其实我是秦始皇，打钱吧$",i=window.wTime=setInterval(function(){if(h.length-1<b)clearInterval(i),c=!0;else{var a=h.substr(b,1);"$"==a&&(a="",e()),"&"==a&&(a="",j()),"#"==a&&(a="<br/>",clearInterval(i),setTimeout(function(){g(b++)},1e3)),f.innerHTML+=a,b++}},d)}function i(){clearInterval(b);for(var a=0;a<origil.length;a++)origil[a].enemy.parentNode.removeChild(origil[a].enemy)}function j(){var i,a=window.origil=[],c=5,d=20,e=30,f=0,g=0;b=setInterval(function(){var b,c;for(b=0;b<a.length;b++)a[b].update(),a[b].action(b);0===f%e&&(c=new i,c.init(g),a[a.length]=c,g++),f+=d},d),i=function(){var b=this;this.enemy={},this.age=0,this.init=function(a){var c=h=Math.ceil(20*Math.random()),d=Math.ceil(Math.random()*(document.documentElement.clientWidth-c));b.enemy=document.createElement("div"),b.enemy.id="enemy_"+a,b.enemy.className="enemy",b.enemy.style.width=c+"px",b.enemy.style.height=h+"px",b.enemy.style.left=d+"px",b.enemy.style.top="-"+h+"px",document.getElementsByTagName("body")[0].appendChild(b.enemy)},this.action=function(d){b.enemy.style.top=b.enemy.offsetTop+Math.round(b.enemy.offsetWidth/c)+"px",b.enemy.offsetTop>document.documentElement.clientHeight-20&&(b.enemy.parentNode.removeChild(b.enemy),a.splice(d,1))},this.update=function(){b.age+=d}}}var b,a=document.getElementById("appreciate"),c=!1;a.onclick=function(){c=!1;var a=document.createElement("div");a.className="money-cover",a.onclick=function(){c&&(a.parentNode.removeChild(a),i(),d(),f())},document.getElementsByTagName("body")[0].appendChild(a),g(0)}}}();