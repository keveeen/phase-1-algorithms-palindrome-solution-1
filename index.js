function isPalindrome(word) {
  // Write your algorithm here:
  // 1.write a function called isPalindrome which takes one string as an argument
  // and evaluates if this string is a palindrome.
  // 2. return the boolean value.

function reverseIt(word){

    return word.split('').reverse().join('')

  }
    if(reverseIt(word) == word){

          return true;
        }

    else{
          return false;
  }


}


// isPalindrome('racecar')
/* 
  Add your pseudocode here

  receive string

  split characters
  reverse characters
  join characters

  evaluate whether reversed word is equal to original word

  return true or false

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
