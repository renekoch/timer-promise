define(function () {
	return function (timer) {
		
		var _reject;
		var _timeout;
		var _promise = new Promise(function (resolve, reject) {
			_timeout = setTimeout(function(){
				_timeout = 0;
				resolve(this, timer);
			}, timer);
			_reject = reject;

		});
		_promise.clearTimeout = function(reason){
			if (_timeout) return;
			clearTimeout(_timeout);
			_timeout = 0;
			_reject(reason);
			
			return _promise;
		};

    		return _promise;
	}
});
