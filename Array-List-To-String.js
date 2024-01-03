
//   Write a single function that takes in the following inputs and returns its corresponding output:

// Input: ["Dogs"]
// Output: Dogs 

// Input: ["Dogs", "Cats"]
// Output: Dogs and Cats

// Input: ["Dogs", "Cats", "Walking"]
// Output: Dogs, Cats and Walking

// Input: ["Dogs", "Cats", "Walking", "Knitting"]
// Output: Dogs, Cats, Walking and Knitting

// Input: ["parrots", "carrots", "gin"]
// Output: parrots, carrots and gin

const Edit = (array) => {
if(array.length === 1){
return array[0]
}else{
  
let arr = array.slice()
let lastWord = arr.pop();
arr.push("and")
arr.push(lastWord);
let joint =  arr.join(", ")
return joint.replace(/, and, /g, " and ")
 
}
}

console.log(Edit( ["parrots", "carrots", "gin"]))