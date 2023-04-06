
  /* 
Test cases

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("mom")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("madam")); // true

  */
  // Write your algorithm here
  function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

/* 
  Add your pseudocode here
function isPalindrome(str)
    for i from 0 to length of str / 2
        if str[i] is not equal to str[length of str - 1 - i]
            return false
    return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
