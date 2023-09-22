/**
 * I pledge my honor that I have abided by the Stevens Honor System
 */
var input_var = "";
var result = 0;
var currentOp = "";
var buffer = 0;
var ErrStr = "ERROR"
setDisplay("0");
function resetCalc() {
   currentOp = "";
   result = 0;
   input_var = "0";
   buffer = 0;
   setDisplay(input_var)
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerHTML = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */

function getResult(){
   return result;
}

function getResult2() {
   if (currentOp == "+"){
      if((parseInt(buffer) + parseInt(input_var)) > 999999999){
         result = 999999999;
         setDisplay(result);
      }
      if((parseInt(buffer) + parseInt(input_var)) < -999999999){
         result = -999999999;
         setDisplay(result);
      }
      else{
         result = parseInt(buffer) + parseInt(input_var);
         setDisplay(result);
      }
      
   }
   else if (currentOp == "-"){
      if((parseInt(buffer) - parseInt(input_var)) > 999999999){
         result = 999999999;
         setDisplay(result);
      }
      if((parseInt(buffer) - parseInt(input_var)) < -999999999){
         result = -999999999;
         setDisplay(result);
      }
      else{
         result = parseInt(buffer) - parseInt(input_var);
         setDisplay(result);
      }

   }
   else if(currentOp == "*"){
      if((parseInt(buffer) * parseInt(input_var)) > 999999999){
         result = 999999999;
         setDisplay(result);
      }
      if(parseInt(buffer) * parseInt(input_var) < -999999999){
         result = -999999999;
         setDisplay(result);
      }
      else{
         result = parseInt(buffer) * parseInt(input_var);
         setDisplay(result);
      }
      
   }
   else if(currentOp == "/"){
      if(input_var == 0 && buffer == 0){
         result = 0;
         setDisplay(ErrStr);
         
      }
      else if(input_var == 0 && buffer != 0){
         result = "ERROR";
         setDisplay(result);
      }
      else{
         result = Math.floor(parseInt(buffer) / parseInt(input_var));
         setDisplay(result);
      }
      
   }
   else{
      result = input_var;
      setDisplay(result);
   }
   
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   test = input_var + num.toString();
   if(parseInt(test) > 999999999){
      setDisplay("999999999");
   }
   else if(parseInt(test) < -999999999){
      setDisplay("-999999999");
   }
   else if(input_var == "0"){
      input_var = num.toString();
      setDisplay(input_var);
   }
   else{
      input_var += num.toString();
      setDisplay(input_var);
   }
   
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if(input_var == ""){
      currentOp = op;
   }
   else{
      getResult2();
      buffer = result;
      currentOp = op;
      input_var = "";
      setDisplay("0");
   }
   
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   getResult2();
   buffer = result;
   
   input_var = "";
   currentOp = "";
}