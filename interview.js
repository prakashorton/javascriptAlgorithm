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
