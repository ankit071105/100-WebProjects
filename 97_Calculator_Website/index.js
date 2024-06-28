function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    try {
      let expression = document.getElementById('display').value;
      let result = evaluateExpression(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function evaluateExpression(expression) {
    return new Function('return ' + expression)();
  }
  