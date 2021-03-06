/*
 *	赞赏功能  v1.0
 *	@author 代码功 
 *	@email 1066443079@qq.com
 */
;(function(){
	window.onload = function(){
		var appBtn = document.getElementById('appreciate');
		var timer2;
		var canClose = false;
		appBtn.onclick = function(){
			canClose = false;
			var cover = document.createElement("div");
				cover.className = 'money-cover';
				cover.onclick = function(){
					if(canClose){
						cover.parentNode.removeChild(cover);
						stopMoneyRain();
						closeQRcode();
						closeWord();
					}
				};
			document.getElementsByTagName("body")[0].appendChild(cover);
			playWord(0);
		};

		/*
		document.getElementById("showQRcode").onclick = function(){
			showQRcode();
		}
		*/

		function closeQRcode(){
			Qr.parentNode.removeChild(Qr); // 去掉二维码
		}

		/**
		 * 显示二维码 显示在右侧漂浮状态，可以扫码进行支付
		 * 包括微信和支付宝
		 * 选项卡模式，可自由切换
		 * @return {[type]} [description]
		 */
		function showQRcode(){
			var Qr = window.Qr = document.createElement("div");
				Qr.className = 'qr';
			var QrTop = document.createElement("div");
				QrTop.className = 'qr-top';
				QrTop.innerHTML = '<li class="current" data-img="weixin.png">微信</li><li data-img="zhifubao.jpg">支付宝</li>';
			var QrBody = document.createElement("div");
				QrBody.className = 'qr-body';
				QrBody.innerHTML = '<img src="weixin.png">';
			Qr.appendChild(QrTop);
			Qr.appendChild(QrBody);
			document.getElementsByTagName("body")[0].appendChild(Qr);
			var QrLi = Qr.getElementsByTagName("li");
			var QrImg = QrBody.getElementsByTagName("img")[0];
			for (var i = 0; i < QrLi.length; i++) {
				QrLi[i].onclick = function(){
					for (var j = 0; j < QrLi.length; j++) {
						QrLi[j].className = '';
					}
					this.className = 'current';
					var src = this.getAttribute("data-img");
					QrImg.setAttribute("src",src);
				};
			}
		}

		/**
		 * 关掉文字 去掉div 停掉计时器
		 * @return {[type]} [description]
		 */
		function closeWord(){
			appWord.parentNode.removeChild(appWord);
			clearInterval(wTime);
		}

		/**
		 * 开始播放文字，以一种比较逗比的文字说明接下来你要做的事情
		 * @param  {[type]} mNum [description]
		 * @return {[type]}      [description]
		 */
		function playWord(mNum){
			var wNum = mNum;
			var timeL = 100;
			if(!document.getElementById("appWord")){
				var appWord = window.appWord = document.createElement("div");
					appWord.id = 'appWord';
					appWord.className = 'app-word';
				document.getElementsByTagName("body")[0].appendChild(appWord);
			}else{
				var appWord = window.appWord = document.getElementById("appWord");
			}
			var str = '老夫昨晚夜观天象，见九星连珠#料定必有大事发生#今天这个时候肯定有人要来施财#不跟你多BB，音响，灯光，摄像师准备#金钱雨，准备！下&#说了你们可能不太信#其实我是秦始皇，打钱吧$';
			var wTime = window.wTime = setInterval(function(){
				if(str.length-1 < wNum){
					clearInterval(wTime);
					canClose = true;
				}else{
					var a = str.substr(wNum,1);
					if(a == '$'){
						a = '';
						showQRcode();
					}
					if(a == '&'){
						a = '';
						playMoneyRain(); // 开始下雨
					}
					if(a == '#'){
						a = '<br/>';
						clearInterval(wTime); // 清除掉
						var sTime = setTimeout(function(){
							playWord(wNum++);
						},1000);
					}
					appWord.innerHTML += a;
					wNum++;
				}
			},timeL);
		}

		/**
		 * stop the money rain
		 * @return {[type]} [description]
		 */
		function stopMoneyRain(){
			// 清除金钱雨
			clearInterval(timer2);
			for (var i = 0; i < origil.length; i++) {
				origil[i].enemy.parentNode.removeChild(origil[i].enemy);
			}
		}

		/**
		 * 播放金钱雨动画
		 * @return {[type]} [description]
		 */
		function playMoneyRain(){
			// 金钱雨
			var origil = window.origil = [];
			var origil_speed = 5; // 移动速度
			var origil_time = 20; // 时间间隔
			var timeLen = 30; // 多久产生一个金币
			var runTime = 0;
			var id = 0;

			timer2 = setInterval(function(){
				for (var i = 0; i < origil.length; i++) {
					origil[i].update(); // 更新敌人现在的状态信息
					origil[i].action(i);
				}

				if(runTime%timeLen === 0){
					var enemy = new enemyF();
					enemy.init(id);
					origil[ origil.length ] = enemy;
			 		id++;
				}

				runTime += origil_time;
			},origil_time);

			/**
			 * 敌机类
			 * @param  {[type]} actionType [description]
			 * @return {[type]}            [description]
			 */
			var enemyF = function(){

				var _this = this;
				this.enemy = {};
				this.age = 0; // 五秒的存在时间

				this.init = function(id){
					var w = h = Math.ceil(Math.random() * 20);
					var l = Math.ceil(Math.random() * (document.documentElement.clientWidth - w));
					_this.enemy = document.createElement("div");
					_this.enemy.id = "enemy_"+id;
					_this.enemy.className = 'enemy';
					_this.enemy.style.width = w + "px";
					_this.enemy.style.height = h + "px";
					_this.enemy.style.left = l + "px";
					_this.enemy.style.top = "-" + h + "px";
					document.getElementsByTagName("body")[0].appendChild(_this.enemy);
				};

				this.action = function(i){
					_this.enemy.style.top = _this.enemy.offsetTop + Math.round(_this.enemy.offsetWidth/origil_speed) + "px";
					if(_this.enemy.offsetTop>document.documentElement.clientHeight - 20){
						_this.enemy.parentNode.removeChild(_this.enemy);
						origil.splice(i,1);
					}
				};

				this.update = function(){
					_this.age += origil_time; // 年龄增加
				};
			};
		}
	};
})();