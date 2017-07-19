window.onload =function(){
	mv.app.toSel();
};

var mv = {};  //命名空间

mv.app = {};

mv.app.toSel = function(){
	var oSel = document.getElementById('sel1');
	var aDd = oSel.getElementsByTagName('dd');
	var aUl = oSel.getElementsByTagName('ul');
	var aH2 = oSel.getElementsByTagName('h2');

	for(var i=0;i<aDd.length;i++){
		aDd[i].index = i;
		aDd[i].onclick = function(ev){
			var ev = ev || window.event;
			var This = this;

			for(var i=0;i<aUl.length;i++){
				aUl[i].style.display = 'none';
			}

			aUl[this.index].style.display = 'block';

			document.onclick = function(){
				aUl[This.index].style.display = 'none';
			};

			ev.cancelBubble = true;

		};

	}

	for(var i=0;i<aUl.length;i++){

		aUl[i].index = i;

		(function(ul){

			var aLi = ul.getElementsByTagName('li');

			for(var i=0;i<aLi.length;i++){
				aLi[i].onmouseover = function(){
					this.className = 'active';
				};
				aLi[i].onmouseout = function(){
					this.className = '';
				};
				aLi[i].onclick = function(ev){
					var ev = ev || window.event;
					aH2[this.parentNode.index].innerHTML = this.innerHTML;
					ev.cancelBubble = true;
					this.parentNode.style.display = 'none';
				};
			}

		})(aUl[i]);
	}

};
