define(function () {
	return function (timer) {
		
		var result = {};
		var _reject;
		var timeout;
		var my_promise = new Promise(function (resolve, reject) {
			timeout = setTimeout(function(){
				timeout = 0;
				resolve(this, timer);
			}, timer);
			_reject = reject;

		});
		my_promise.clearTimeout = function(reason){
			if (timeout) return;
			clearTimeout(timeout);
			timeout = 0;
			_reject(reason);
			
			return my_promise;
		};

    		return my_promise;
	}
});
