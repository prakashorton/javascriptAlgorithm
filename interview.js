// Debounce
function debounce(myfunc, delay){
  var timer=null;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      myfunc();
    }, delay);
  }
}

// Throttling
function throttle(myfunc, delay){
  let flag=true;
  return function(){
    if(flag){
      myfunc();
      flag = false;
      setTimeout(function(){
        flag = true;
      }, delay);
    }
  }
}

// Bind
Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...arg2) {
      fn.apply(context, [...args1, ...arg2])
  }
};

// Reduce
Array.prototype.myReduce = function(func, init){
    var initial = init;
    this.forEach(function(item){
        initial = func(initial, item);
    });
    return initial;
}
