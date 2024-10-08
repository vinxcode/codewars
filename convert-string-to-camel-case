function toCamelCase(str){
  
  function isUpperCase(letter) {
    return letter === letter.toUpperCase();
  }
  
  let areScores = false 
  let words = []
  let str2 = str
  
  let scoreIndex = str2.search(/[-_]/)
  
      do{
          if(scoreIndex>=0){
            let newStr = str2.slice(0,scoreIndex)
            words.push(newStr)
            str2 = str2.slice(scoreIndex+1, str2.length)

            scoreIndex = str2.search(/[-_]/)
            
            if(scoreIndex>=0){
              areScores = true
            } else {
              words.push(str2)
            }
            
          } else {
            areScores = false
          }
      } while(areScores)
      
      const result = words.map(word => word.replace(
      word.charAt(0),
      word.charAt(0).toUpperCase()
      ))
    
  let response = result.join("")
  
  console.log(str.charAt(0))
  return isUpperCase(str.charAt(0)) ? 
    response
    : 
    response.replace(
    response.charAt(0),
    response.charAt(0).toLowerCase())
}


