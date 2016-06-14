(function($){
	var  Lunbo = function(config){
		var _config = {
		interval:2000,
		step:$.noop
	    }
	    var move = function(){
			ul.animate({'marginLeft':-index*off},200);

			index+=1;
			_config.step(index);
			if(index === li.length){
				index = 0;
			}
		}
		$.extend(_config,config);
		var ul = this.find('ul'),
		   li = ul.find('li'),
		   off = li.outerWidth(true),
		   index= 1;
		var timerId = setInterval(move,_config.interval)
		this.on('mouseenter.lunbo',function(){
             clearInterval(timerId)

		})
		this.on('mouseleave.lunbo',function(){
             timerId = setInterval(move,_config.interval)
		})
		return this;
	}

    $.fn.extend({lunbo:Lunbo})
})(jQuery)
