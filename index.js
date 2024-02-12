function getUserPassword(){
let passwordUserLength = document.getElementById("passwordLength")
let includeUserLowerCase = document.getElementById("includeLowerCase")
let includeUserUpperCase = document.getElementById("includeUpperCase")
let includeUserNumbers = document.getElementById("includeNumbers")
let includeUserSimbols = document.getElementById("includeSimbols")
const passwordLength = passwordUserLength.value
const includeLowerCase = includeUserLowerCase.checked
const includeUpperCase = includeUserUpperCase.checked
const includeNumbers= includeUserNumbers.checked
const includeSimbols = includeUserSimbols.checked

let userPassword = generatePassword(passwordLength,includeUpperCase, includeLowerCase, includeNumbers,includeSimbols)
let userResult = document.getElementById("result");

userResult.innerHTML = `Your password is : ${userPassword}`
}
function generatePassword(length, includeUpperCase, includeLowerCase, includeNumbers, includeSimbols){

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const simbols = "#@$!()%&^*_-+=";

let allowedChars = "";
let password = "";

allowedChars += includeLowerCase ? lowerCase : "";
allowedChars += includeUpperCase ? upperCase : "";
allowedChars += includeNumbers ? numbers : "";
allowedChars += includeSimbols ? simbols : "";
if (length <= 0){
    alert(`Your password must have at least one character`)
}
else if (includeLowerCase == false && includeUpperCase == false && includeNumbers == false && includeSimbols ==false){
 alert("You must choose at least one character type for your password")
}
else{
for (let i = 0; i< length; i++){
    const randomIndex = Math.floor(Math.random()* allowedChars.length);
    password += allowedChars[randomIndex];
}

return password;
}
}



let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let thisYear = document.querySelector("#year");
thisYear.textContent = currentYear;