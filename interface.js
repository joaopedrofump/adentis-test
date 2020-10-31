const check = (inputs, testFunction, resultParagraph, concept) => resultParagraph.innerHTML = `The input phrase${inputs.length > 1 ? 's are' : ' is '} ${testFunction(...inputs.map(input => input.value)) ? ' ' : ' not '} ${concept}.`  

const anagramArgs = Array.from(document.querySelectorAll('section#anagram input'))
const palindromeArgs = Array.from(document.querySelectorAll('section#palindrome input'))

const anagramButton = document.querySelector('section#anagram button')
const palindromeButton = document.querySelector('section#palindrome button')

const anagramAnswer = document.querySelector('section#anagram p')
const palindromeAnswer = document.querySelector('section#palindrome p')

anagramButton.addEventListener('click', () => check(anagramArgs,anagram,anagramAnswer,'anagrams'))
palindromeButton.addEventListener('click', () => check(palindromeArgs,palindrome,palindromeAnswer, 'a palindrome'))