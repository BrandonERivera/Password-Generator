// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  //Variables

  // Creating variables the prompts will ask the question for length.
  var passwordsize = window.prompt("enter length of password");
  // It will grab the length of the password in passarr, and create an empty array for it to fill.
  var passarr = [];
  passarr.length = passwordsize;
  // chararray is for later when asking about the characters to include and not include
  var chararray = [0,0,0,0];
  // arrays alphabets and spchar are characters the computer will choose from for the password.
  var alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var spchar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",":",";","[","]","{","}","'","|",",",".","<",">","?","/"];
  // var character will be returned and will updated to fill in the passarr.
  var character;

//Functions
//This function is how it will choose randomly for character types.
function ChooseACharacter()
{
  var selectedFunction = Math.floor(Math.random() * 4);

  if(selectedFunction == 0)
  {
    ChooseALowerLetter()
  }
  if(selectedFunction == 1)
  {
    ChooseAUpperLetter()
  }
  if(selectedFunction == 2)
  {
    ChooseANumber()
  }
  if(selectedFunction == 3)
  {
    ChooseASpChar()
  }
//Functions ChooseA------ is for choosing a random letter/number/symbol in its array (or in nums case 0-9)
//all have else to ChooseACharacter because it checks if chararray has a Y/N in it and if it should include
// or not include said character type.
function ChooseALowerLetter()
{
  if(chararray[0] === "Y")
  {
    var chosenchar = Math.floor(Math.random() * alphabets.length);
    character = alphabets[chosenchar];
    return character;
  }
  else
  {
    ChooseACharacter()
  }
}
function ChooseAUpperLetter()
{
  if(chararray[1] === "Y")
  {
    var chosenalphabet = Math.floor(Math.random() * alphabets.length);
    character = alphabets[chosenalphabet].toUpperCase();
    return character;
  }
  else
  {
    ChooseACharacter()
  }
}
function ChooseANumber()
{
  if(chararray[2] === "Y")
  {
    var chosennum = Math.floor(Math.random() * 10);
    character = chosennum;
    return character;
  }
  else
  {
    ChooseACharacter()
  }
}
function ChooseASpChar()
{
  if(chararray[3] === "Y")
  {
    var chosenspchar = Math.floor(Math.random() * spchar.length);
    character = spchar[chosenspchar];
    return character;
  }
  else
  {
    ChooseACharacter()
  }
  return character;

}

}
  //These are for answering the questions, it also makes sure the password is an apporpriate size and if not, or if no character
  //types are acceptable then it will not proceed.
  if(passwordsize < 8 || passwordsize > 128 )
  {
    window.alert("not a valid number")
  }
  else
  {
    //heres where chararray is changed and ChooseACharacter function will know what characters to include or not.
    var YNletters = window.confirm("Click OK if you would like lowercase letters. If not click Cancel");
    if(YNletters)
    {
      chararray[0] = "Y";

    }
    else
    {
      chararray[0] = "N";
    }
    var YNUPletters = window.confirm("Click OK if you would like Uppercase letters. If not click Cancel");
    if(YNUPletters)
    {
      chararray[1] = "Y";

    }
    else
    {
      chararray[1] = "N";
    }
    var YNNums = window.confirm("Click OK if you would like numbers. If not click Cancel");
    if(YNNums)
    {
      chararray[2] = "Y";

    }
    else
    {
      chararray[2] = "N";
    }
    var YNSpChar = window.confirm("Click OK if you would like Special Characters. If not click Cancel");
    if(YNSpChar)
    {
      chararray[3] = "Y";

    }
    else
    {
      chararray[3] = "N";
    }
    if (chararray.includes("Y") === false){
      window.alert("cannot make a valid password")
    }
    else
    {
      //This is where function will be called to replace each value in array passarr with character that
      // is returned from choose a letter.
      for(i = 0; i < passarr.length; i++)
      {
        ChooseACharacter()
        passarr[i] = character;
      }
    }
  }
  //it is all then joined into one string without comma's
  return passarr.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
