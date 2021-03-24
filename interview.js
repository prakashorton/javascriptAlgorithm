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

var a = [10, 21, 13, 56];

function add(a, b) { return a + b }
function foo(a, b) { return a.concat(b) }

Array.prototype.reduce2 = function(fn, start){
  var result = start !== undefined ? start : this[0];
  for (var i = 0; i < this.length; i++) {
    result = fn(result, this[i]);
  }
  return result;
};
console.log(a.reduce(add), a.reduce2(add))         // 100 100
console.log(a.reduce(add, 10), a.reduce2(add, 10)) // 110 110
console.log(a.reduce(foo, ''), a.reduce2(foo, ''));
console.log(a.reduce(foo, 'X'), a.reduce2(foo, 'X'));

// ForEach
Array.prototype.myforEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
}

// Map
Array.prototype.myMap = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {

        arr.push(cb(this[i]));
    }
    return arr;
}

// Filter
Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            arr.push(this[i]);
         }
    }
    return arr;
}
