const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]

function titleCased(){
  const result = tutorials.map((tutorial) => {
    var sentence = tutorial.split(" ");
    for(var i = 0; i < sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
     };  
    return sentence.join(" ")
  })
  return result
}
//  console.log(titleCased)
console.log(titleCased())