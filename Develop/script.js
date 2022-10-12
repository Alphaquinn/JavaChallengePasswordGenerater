// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
}

var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length -1)]
}




function generatePassword() {
  var userInput = window.prompt ("How many characters would you like in your password?")


  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
window.alert("Thats not a #!")
return
  }

  if (passwordLength < 8 || passwordLength > 128) {

window.alert ("Password must be atleast 8 characters and no more than 128 characters long?")
return

  }

  var userWantsNumbers = window.confirm("would you like to include #'s in this password?")
  var userrWantsSymbols = window.confirm("Would you like to include symbol characters in this password?")
  var userWantsupper = window.confirm("Would you like to include uppercase letters in this password?")
  var userWantsLower = window.confirm("Would you like to include lowercase letters in this password?")


  var numberlist = ["0","1","2","3","4","5","6","7","8","9"]
  var SymbolsList = ["!","@","$","%","^","&","*",":",";","/","|","?","=","+","~", ]
  var uppercaseList = ["Q","A","Z","W","S","X","E","D","C","R","F","V","T","G","B","Y","H","N","U","J","M","I","K","O","L","P"]
  var lowercaseList =["q","a","z","w","s","x","e","d","c","r","f","v","t","g","b","y","h","n","u","j","m","i","k","o","l","p",]

  var optioncart =[]

  if (userWantsNumbers===true){optioncart.push(numberlist)}

  if (userrWantsSymbols===true){optioncart.push(SymbolsList)}

  if (userWantsupper===true){optioncart.push(uppercaseList)}

  if (userWantsLower===true){optioncart.push(lowercaseList)}

  var generatedPassword =""
  for (var i = 0; i < passwordLength; i++)  {
   var randomlist = getRandomItem(optioncart)
   var randomchar = getRandomItem(randomlist)
   generatedPassword+= randomchar

 
  } 

  return generatedPassword



  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
