$(document).ready(function () {
			
			//弹出内容框
			var mask = $('.mask-layer');
			function popupHidden(){
				mask.removeClass('active')
				$('.popup-in').css({display:'none'}).removeClass('popup-in')
			}
			$('.popup-btn').on('touchend',function(){
				mask.addClass('active')
				var thisPop = $('.'+$(this).data('popup'));
				thisPop.css({display:'block'})
				var timer;
				timer = setTimeout(function(){
					thisPop.addClass('popup-in')
					},100)
			})
			mask.on('touchend mousedown',function (e) {
				e.preventDefault()
				popupHidden();
			})
			$('.jsClose').on('touchend mousedown',function (e) {
				e.preventDefault()
				popupHidden();
			})
			
			//弹出提示框
			$(".tips-btn").on('touchend mousedown',function() {
            	$(".tips-panel").css({display:'block'}).animate({opacity:1});
				var timer = setTimeout(function(){
					$(".tips-panel").animate({opacity:0},function(){$(this).css("display","none")});
				},2000)
        	});
			
			//水波反馈效果
			$('.btn').on('click', function (e) {
				$(".ripple").remove();
    			var offset = $(this).offset();
    			var x = e.pageX;
    			var y = e.pageY;
				var owidth = $(this).width();
				var oheight = $(this).height();
				$(this).append("<span class='ripple'></span>")
				// Let's make a circle!
				if (owidth >= oheight) {
					oheight = owidth;
				} else {
					owidth = oheight;
				}
				$(".ripple").css({
					width:owidth,
					height:oheight,
        			left: x - offset.left - owidth / 2,
        			top: y - offset.top - oheight / 2
    			}).addClass('show')
			});
			
        });