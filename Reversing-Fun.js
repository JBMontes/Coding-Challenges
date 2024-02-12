// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

// Let's say you start with this: "012345"

// The first thing you do is reverse it:"543210"
// Then you will take the string from the 1st position and reverse it again:"501234"
// Then you will take the string from the 2nd position and reverse it again:"504321"
// Then you will take the string from the 3rd position and reverse it again:"504123"

// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

function flipNumber(n) {

    let final = ""
    let split = n.split("")
    //turn string into an array with each letter representing an index
    for(let i = 1 ; i <= n.length; i++){
        //loop through the length starting at one because we don't do anything to the first and last index

      split.reverse()
      // reverse the array and add the first index to the empty string variable
      final += split[0]
      //remove the first index after it is added to run the loop again.
      split.shift()
    }
      return final
    }
    