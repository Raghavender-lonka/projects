let billElement = document.getElementById("bill");
let personNumberElement = document.getElementById("no-of-people");
let tipElement = document.querySelectorAll(".tip");
let customTipElement = document.getElementById("custom-tip");
const tipsCalculatedElement = document.getElementById("tips");
const totalSumElement = document.getElementById("total");
const resetButton = document.getElementById("button-reset");
const inputsEl = document.querySelectorAll(".input-number");
let tips;
let total;

// const renderSpan = function (inputField, message = "Can't be zero") {
//   let inputErrorMessage = document.createElement("span");
//   inputErrorMessage.classList.add("error-message");
//   inputErrorMessage.textContent = message;
//   inputField.parentNode.prepend(inputErrorMessage);
// };

const calculate = function (e) {
  let bill = +billElement.value.trim();
  if (personNumberElement.value === "" || personNumberElement.value === "0") {
    personNumberElement.value = 1;
  }
  let personCount = +personNumberElement.value.trim();
  let selectedTips = +e.target.innerText.replace("%", "") / 100;

  if (e.type === "input") {
    selectedTips = +e.target.value.trim() / 100;
  }

  tips = parseFloat((bill * selectedTips) / personCount).toFixed(2);
  total = parseFloat((bill * selectedTips + bill) / personCount).toFixed(2);
  e;

  tipsCalculatedElement.innerText = "₹ " + tips;
  totalSumElement.innerText = "₹ " + total;
};

tipElement.forEach((button) => {
  button.addEventListener("click", function (e) {
    calculate(e);
    button.classList.toggle("selected");
    resetButton.addEventListener("click", function (e) {
      totalSumElement.innerText = "₹ 0.00";
      tipsCalculatedElement.innerText = "₹ 0.00";
      billElement.value = "";
      personNumberElement.value = "";
      customTipElement.value = "";
      tips = 0;
      total = 0;
      button.classList.toggle("selected");
      // button.style.backgroundColor = "hsl(183, 100%, 15%)";
    });
  });
});

customTipElement.addEventListener("input", function (e) {
  calculate(e);
});

// // LISTENERS
// inputsEl.forEach((input) => {
//   input.addEventListener("input", function (e) {
//     let value = parseInt(this.value);
//     if (value > 999999999999999) {
//       this.value = 999999999999999;
//     } else if (value < 0) {
//       this.value = 0.01;
//     }
//   });
// });

// tipElement.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     let validInput = false;
//     customTipElement.value = "";

//     inputsEl.forEach((input) => {
//       if (input.value === "" || !input || input.value < 0) {
//         validInput = false;
//         input.classList.add("error");
//         renderSpan(input);
//       } else {
//         validInput = true;
//         if (input.classList.contains("error")) {
//           input.classList.remove("error");
//           let parent = input.parentNode;
//           parent.removeChild(parent.firstElementChild);
//         }
//       }
//     });

//     if (validInput) {
//       calculate(e);
//     } else if (!validInput) {
//     }
//   });
// });

// customTipElement.addEventListener("input", function (e) {
//   let value = parseInt(this.value);
//   if (value < 0) {
//     this.value = 1;
//   } else if (value > 10000) {
//     this.value = 10000;
//   } else {
//     calculate(e);
//   }
// });
