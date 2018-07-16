define(function () {
	return function (timer) {
		
		var result = {};
		
		var my_promise = new Promise(function (resolve, reject) {
      var timeout = setTimeout(function(){
        timeout = 0;
        resolve(this, timer);
      }, timer);

      my_promise.stopTimer = function(reason){
        if (timeout) return;
        clearTimeout(timeout);
        timeout = 0;
        reject(reason);
      };
    });

    return my_promise;
  }
});
