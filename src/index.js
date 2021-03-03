module.exports = function reverse (n) {
  let output;
  n=n+"";
  output = n.split('').reverse().join('');
  output= parseInt(output,10);
    return output;
}
