var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function newPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", newPassword);


function generatePassword(){
    var upper="QWERTYUIOPASDFGHJKLZXCVBNM"
    var lower=upper.toLowerCase()
    var num="1234567890"
    var special="!@#$%^&*()_+"
    var charBase=""
    var generatedPassword=""

    var confirmlower=confirm("Do you want lower-case characters?") 
    if (confirmlower) {
        charBase+=lower
    }

    var confirmupper=confirm("Do you want upper-case characters?") 
    if (confirmupper) {
        charBase+=upper
    }
    var confirmnumber=confirm("Do you want to add numbers to the password?") 
    if (confirmnumber) {
        charBase+=num
    }
    var confirmspecial=confirm("Do you want to add any special characters?") 
    if (confirmspecial) {
        charBase+=special
    }
    var length = prompt("Please choose a password length of 8-128")
      if(length > 128){
        window.alert("That's way to many characters, what are you thinking? Lol");
        length();
      }
      else if(length < 8) {
        window.alert("We need at least 8 characters in this thang. Thanks!");
        length();
      }
      
    
    for (let index = 0; index < length; index++) {
        generatedPassword += charBase.charAt(Math.floor(Math.random()*charBase.length))
        
    }
return generatedPassword

}