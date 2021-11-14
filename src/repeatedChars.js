// Write an algorithm that receives a string and returns the repeated
// character (if any) that appears the earliest in the string (or null,
// if no character is repeated).

// For example:

// 1. firstRepeatedCharacter("ABCA") returns A
// 2. firstRepeatedCharacter("BCABA") returns B
// 3. firstRepeatedCharacter("glovol") returns l
// 4. firstRepeatedCharacter("ABC") returns null

module.exports = (stringInput) => {
  const stringArray = stringInput.split('')
  console.log(stringArray)
const repetions = {}
  for(index = 0; index < stringArray.length; index ++) {
    // var itemAtHand = stringArray[index] 
    // for(j = index + 1 ; j < stringArray.length; j++) {
    //   if(itemAtHand === stringArray[j]) return itemAtHand
    // }

    if(repetions[stringArray[index]]) {
      repetions[stringArray[index]] = repetions[stringArray[index]] + 1
     } else {
      repetions[stringArray[index]] = 1
     }
    console.log(repetions[stringArray[index]])
    // if(repetions[index]) { repetions[index]++} else {repetions[index]=1}
  }

  for(j = 0; j < stringArray.length; j ++) {
     if(repetions[stringArray[j]] > 1) return stringArray[j]
  }
  return null
}
/*
BBCAA
ABAC -> a clone
A === A return A
-------------------------------------
{
  B: 2,
  C: 1,
  A: 2
}

*/