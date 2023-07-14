let para = document.querySelector("p");
let btn = document.querySelector("button");

function showNumbers() {
  const numbers = [];
  let result = "";
  if (btn.innerHTML === "Numbers Divisible by 3") {
    for (let num = 0; num <= 100; num++) {
      if (num % 3 === 0) {
        numbers.push(num);
      }
    }
    result = numbers.join(", ");
    para.textContent = "Numbers divisible by 3: " + "<br/>" + result;
    btn.innerHTML = "Numbers Divisible by 5";
  } else if (btn.innerHTML === "Numbers Divisible by 5") {
    numbers.length = 0; // Clear the array for new numbers
    for (let num = 0; num <= 100; num++) {
      if (num % 5 === 0) {
        numbers.push(num);
      }
    }
    result = numbers.join(", ");
    para.textContent = "Numbers divisible by 5: " + result;
    btn.innerHTML = "Numbers Divisible by 3 and 5";
  } else if (btn.innerHTML === "Numbers Divisible by 3 and 5") {
    numbers.length = 0; // Clear the array for new numbers
    for (let num = 0; num <= 100; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
        numbers.push(num);
      }
    }
    result = numbers.join(", ");
    para.textContent = "Numbers divisible by both 3 and 5: " + result;
    btn.innerHTML = "Reset";
  } else {
    // Reset the button and paragraph
    para.textContent = "Click on the button to see numbers divisible by 3";
    btn.innerHTML = "Numbers Divisible by 3";
  }
}
