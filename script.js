// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // getting variables
  var passwordsize = window.prompt("enter length of password");
  var passarr = [];
  passarr.length = passwordsize;

  var chararray = [0,0,0,0];

  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];




  //answering the question prompts
  if(passwordsize < 8 || passwordsize > 128 )
  {
    window.alert("not a valid number")
  }
  else
  {
    var YNletters = window.confirm("would you like lowercase letters?");
    if(YNletters)
    {
      chararray[0] = "Y";

    }
    else
    {
      chararray[0] = "N"
    }
    var YNUPletters = window.confirm("would you like Uppercase letters?");
    if(YNUPletters)
    {
      chararray[1] = "Y";

    }
    else
    {
      chararray[1] = "N"
    }
    var YNNums = window.confirm("would you like numbers?");
    if(YNNums)
    {
      chararray[2] = "Y";

    }
    else
    {
      chararray[2] = "N"
    }
    var YNSpChar = window.confirm("would you like Special Characters?");
    if(YNSpChar)
    {
      chararray[3] = "Y";

    }
    else
    {
      chararray[3] = "N"
    }
    if (chararray.includes("Y") != true){
      window.alert("cannot make a valid password")
      return;
    }
    else
    {
      
    }

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
