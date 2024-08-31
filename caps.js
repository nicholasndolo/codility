const capsToFront = (str) => {
  const strArr = str.split("")
  let capitalLetters = ""
  let smallLetters = ""

  for(let i = 0; i < strArr.length; i++){
    if(strArr[i] === str[i].toUpperCase()) capitalLetters += strArr[i]
    else smallLetters += strArr[i]
  }

  return `${capitalLetters}${smallLetters}`
 }

 console.log(capsToFront("NndIoCloK"))