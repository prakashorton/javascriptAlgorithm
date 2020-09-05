function isBalance(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else {
      if (stack.length == 0) return false;
      if (
        (str[i] === ")" && stack[stack.length - 1] != "(")(
          str[i] === "]" && stack[stack.length - 1] != "["
        )(str[i] === "}" && stack[stack.length - 1] != "{")
      ) {
        return false;
      }
    }
    stack.pop();
  }
  return !stack.length;
}
