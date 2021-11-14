// Write an algorithm that given a string containing any combination of the characters
// '(', ')', '{', '}', '[' and ']', determines if the input string is valid.

// An input string is valid when:

// - Opening parentheses are closed by the same type of closing parentheses, and
// - Opening parentheses are closed in the correct order.

// No other characters are present in the string except those mentioned above.

// Examples:

// 1. "()" -> true
// 2. "()[]{}" -> true
// 3. "(]" -> false
// 4. ")(" -> false
// 5. "([)]" -> false
// 6. "{[]}" -> true
// 7. ")" -> false
// 8. "([]" -> false
// 9. "{" -> false
// 10. "([)])" -> false
// 11. "(((((((((())))))))))" -> true
// 12. "" -> true

// Note that an empty string is also considered valid.

const _findMyOpposite = inputChar => {
  if(inputChar === ')') return '('
  if(inputChar === '}') return '{'
  if(inputChar === ']') return '[' 
}

module.exports = inptuString => {
  // base case, empty string is valid
  // use stacks
  // push with openings and pop with closes
  // till stack is empty, if not empty return false
  if(inptuString === "") return true

  const inputArray = inptuString.split('')
  let validationStack = []

  for(i = 0; i< inputArray.length ; i++) {
    if(['(', '{', '['].includes(inputArray[i])){
      console.log('included')
      validationStack.push(inputArray[i])
    } else {
      if(validationStack.length !== 0 && validationStack[validationStack.length -1] === _findMyOpposite(inputArray[i])) {
        validationStack.pop()
      } else {
        return false
      }
    }
  }

  if(validationStack.length === 0) return true

  return false

}