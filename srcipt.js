function convert(){
    let str1 = document.getElementById("input").value
      let str2 = str1.split('').reverse().join('')
   let str3
    
      if (str1 == str2){
          str3 = "The given text is palindrome"
      }

      else {
          str3 = " The given text is not a palindrome"
      }
   let result= document.getElementById("result")
   result.innerHTML =  `${str3} `
 }