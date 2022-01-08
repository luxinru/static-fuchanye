var timer = null
//上下无缝滚动
function slide(elp, elc) {
	var loops = $(elp).attr("attr-loop");
	var slideElm = $(elc);
	var slideHeight = null;
	var timer = null
	var childHeight = $(elc).height(); //获取子级的内容高度
	var parentHeight = $(elp).height(); //获取父级的高度

	//如果子级高度大于父级，不管loop是什么都需要循环，如果子级高度小于父级，需要判断loop是否为true，loop=true  就继续上下无缝滚动
	if (childHeight > parentHeight) {
		slideElm.append(slideElm.html());
		slideHeight = $(elc).height() / 2;
		msgSlide(loopSlide);
		return timer;

	} else {
		if (loops == "true") {
			slideHeight = $(elc).height();
			msgSlide(loopTrueSlide);
			return timer;
		} else {
			$(elc).css("top", "0px");
		}
	}

	//上下滚动				
	function loopSlide() {

		if (Math.abs($(elc).position().top) > slideHeight) {
			$(elc).css("top", "0px");
		} else {
			$(elc).css("top", $(elc).position().top - 1);
		}
	}

	//loop  为true 时还需要滚动
	function loopTrueSlide() {
		$(elc).css("top", $(elc).position().top - 1);

		if ($(elc).position().top == -slideHeight) {
			$(elc).css("top", $(elp).height());
		}
	}
	//鼠标移入暂停，移出继续
	function msgSlide(fn) {
		timer = setInterval(fn, 20);
	}


}