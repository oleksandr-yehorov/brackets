module.exports = function check(str, bracketsConfig) {
  // your solution

 const arr = str.split('');  
 if (arr.length % 2 !== 0) return false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (arr[i] === bracketsConfig[j][0] && arr[i + 1] === bracketsConfig[j][1]) {
              arr.splice(i, 2); 
              let newStr = arr.join('');
              return check(newStr, bracketsConfig);
            }
        }
    }
    
    if (arr.length == 0) {
      return true
     }
      else {
    return false
    };

}
