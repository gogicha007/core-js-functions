function getArgumentsCount(func) {
  return func.length;
}


function nullArgs() {
  return 'hello world';
}

function myFunc(x) {
  return x;
}

const multiply = (a, b) => a * b

function foo(){
  console.log('hei buddy')
}

console.log(getArgumentsCount(multiply(1,2)))
