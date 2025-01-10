
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operator = document.getElementById('operator').value.trim();
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
      resultDiv.textContent = "Please enter valid numbers.";
      return;
    }   

    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operator. Use +, -, *, or /.";
    }

    resultDiv.textContent = `Result: ${result}`;
  }
``