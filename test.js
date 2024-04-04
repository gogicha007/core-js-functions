function getPolynom() {
  if (!arguments) return null;
  if(arguments.length === 1) return (x) => arguments[0]
  if(arguments.length === 2) return (x) => arguments[0]*x+arguments[1]
  return (x) => arguments[0]*(x**2)+arguments[1]*x+arguments[2];
}

const poly = getPolynom(8)
console.log(poly(5))
