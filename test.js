const adentisTest = require('./index')

const testAnagram = (expected, s1, s2) => console.log(`Anagram Test "${s1}" and "${s2}": Expected:`, expected, 'Actual:', adentisTest.anagram(s1, s2))
const testPalindrome = (expected, str) => console.log(`Palindrome Test "${str}": Expected:`, expected, 'Actual:', adentisTest.palindrome(str))

testAnagram(true, 'finder', 'friend')  //true
testAnagram(true, 'fiNder', 'Friend')  //true
testAnagram(true, 'cat', 'act')  //true
testAnagram(true, ' ', ' ')  //true
testAnagram(false, 'finder', 'friendly')  //false
testAnagram(false, 'ccat', 'actt')  //false
testAnagram(false, 'hello', 'bye')  //false
testAnagram(false, 'hello')  //false
testAnagram(false)  //false

//spaces and upper case
testAnagram(true, 'Dormitory', 'Dirty room') //true


//Test Cases
testPalindrome(true, "eye")
testPalindrome(true, 'race car') //should return true
testPalindrome(false, 'not a palindrome') //should return false
testPalindrome(true, 'A man, a plan, a canal.Panama') //should return true
testPalindrome(true, 'never odd or even') //should return true
testPalindrome(false, 'nope') //should return false
testPalindrome(false, 'almostomla') //should return false
testPalindrome(true, 'My age is 0, 0 si ega ym.') //should return true
testPalindrome(false, '1 eye for of 1 eye.') //should return false
testPalindrome(true, '0_0(: /-\ :) 0–0') // should return true
testPalindrome(true, '') // should return true