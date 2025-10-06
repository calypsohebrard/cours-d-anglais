const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultText = document.getElementById("results-div");



const checkRegex = /^1?\s?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

const validPhoneNumber = number => checkRegex.test(number);

const isError = number => {
  if(userInput.value === "") {
    alert("Please provide a phone number");
    return true;
  } if(!validPhoneNumber(number)) {
    resultText.innerText = `Invalid US number: ${number}`;
    return true;
  }
  return false;
}

checkBtn.addEventListener("click", () => {
  const numberToCheck = userInput.value;
  if(!isError(numberToCheck)) {
     resultText.innerText = `Valid US number: ${numberToCheck}`;
  } 
   userInput.value = "";
})

clearBtn.addEventListener("click", () => {
  resultText.innerText = "";
})

userInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    e.preventDefault();
    checkBtn.click();
  }
})
