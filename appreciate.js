/*
 *	赞赏功能  v1.0
 *	@author 代码功 
 *	@email 1066443079@qq.com
 */
;(function(){
	window.onload = function(){
		var appBtn = document.getElementById('appreciate');
		var timer2;
		appBtn.onclick = function(){
			var cover = document.createElement("div");
				cover.setAttribute("style","opacity:0.5;filter:alpha(opacity=50);width:100%;height:100%;position:fixed;left:0px;top:0px;background-color:black;z-index:99999;");
				cover.onclick = function(){
					cover.parentNode.removeChild(cover);
					stopMoney();
				}
			document.getElementsByTagName("body")[0].appendChild(cover);
			startMoney(); // 开始下雨
		}

		function stopMoney(){
			// 清除金钱雨
			clearInterval(timer2);
			for (var i = 0; i < origil.length; i++) {
				origil[i].enemy.parentNode.removeChild(origil[i].enemy);
			}
		}

		function startMoney(){
			// 金钱雨
			var origil = window.origil = [];
			var origil_speed = 5; // 移动速度
			var origil_time = 20; // 时间间隔
			var timeLen = 200; // 多久产生一个敌机
			var runTime = 0;
			var id = 0;

			timer2 = setInterval(function(){
				for (var i = 0; i < origil.length; i++) {
					origil[i].update(); // 更新敌人现在的状态信息
					origil[i].action(i);
				}

				if(runTime%timeLen == 0){
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
				}

				this.action = function(i){
					_this.enemy.style.top = _this.enemy.offsetTop + origil_speed + "px";
					if(_this.enemy.offsetTop>document.documentElement.clientHeight - 20){
						_this.enemy.parentNode.removeChild(_this.enemy);
						origil.splice(i,1);
					}
				}

				this.update = function(){
					_this.age += origil_time; // 年龄增加
				}
			}
		}
	}
})();