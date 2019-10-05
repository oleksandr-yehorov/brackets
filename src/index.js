module.exports = function check(str, bracketsConfig) {
  // your solution

  console.log(str);
  if (str.length % 2 === 1) return false;

  var k=0;
  var i=0;

  for (i=0; i<str.length; i++) {
    if (str[i]==bracketsConfig[0,0]) {
      k++;
    } else if (str[i+1]==bracketsConfig[0,1]) {
      k--;
    }
    i=i+2;
  };

  console.log('k=' + k);
  var result;
  if (k == 0) { result=true}
  else if (k!==0) { result=false};
  console.log('Result=' + result);
  return result;
}
