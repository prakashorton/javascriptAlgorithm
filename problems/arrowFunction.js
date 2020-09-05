// Example
let obj = {
  hey: () => {
    console.log(this);
  },
  hello: function () {
    console.log(this);
  },
};
let hey = obj.hey;
let hello = obj.hello;

console.log("**");
obj.hey(); //  window
obj.hello(); //  obj
console.log("**");
hey(); //  window
hello(); //  window

// Example
function Person() {
  var that = this;
  this.age = 0;

  setInterval(function growUp() {
    console.log(this); // Window
  }, 1000);
}

function PersonArrow() {
  this.age = 0;

  setInterval(() => {
    console.log(this); // PersonArrow
  }, 1000);
}

// Example
var adder = {
  base: 1,

  add: function (a) {
    var f = (v) => v + this.base;
    return f(a);
  },

  addThruCall: function (a) {
    var f = (v) => v + this.base;
    var b = {
      base: 2,
    };

    return f.call(b, a);
  },
};

console.log(adder.add(1)); // This would log 2
console.log(adder.addThruCall(1)); // This would log 2 still
