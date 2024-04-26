let num = 25.12345
document.getElementById('original-statement').innerHTML = num

// show Output / Results
function showOutput(value){
    document.getElementById('output-field').innerHTML = value
}

// Rounded a number
function handleRounding () {
    let inputValue = document.getElementById('userinput').value
    if(!inputValue){
        let roundedNum = Math.round(num);
        showOutput(roundedNum) 
    }else{
        let roundedNum = Math.round(inputValue);
        showOutput(roundedNum) 
    }

    document.getElementById('userinput').value = ""
}

// ceil a Number
function handleCeil () {
    let inputValue = document.getElementById('userinput').value
    if(!inputValue){
        let ceilNumber = Math.ceil(num);
       showOutput(ceilNumber)
    }else{
        let ceilNumber = Math.ceil(inputValue);
        showOutput(ceilNumber)
    }

    document.getElementById('userinput').value = ""
}

// floor a Number
function handleFloor () {
    let inputValue = document.getElementById('userinput').value
    if(!inputValue){
        let floorNum = Math.floor(num);
       showOutput(floorNum)
    }else{
        let floorNum = Math.floor(inputValue);
        showOutput(floorNum)
    }

    document.getElementById('userinput').value = ""
}

// generate Randon Number
function handleRandomNumber () {
    let randomNumber = Math.random();
    showOutput(randomNumber)
}

// Generate Dice Number
function handleDice() {
    let randomNum = Math.random();
    let diceNum = randomNum * 6 + 1;
    let floorDiceNum = Math.floor(diceNum);
    showOutput(floorDiceNum);
}

// Generate strong Password
function handlePassword() {
    let charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*-_+\/,.~|?"
    let password = ""
    let passwordLength = document.getElementById('userinput').value
    if(!passwordLength){
        alert("Write length of Password!")
    }else{
        for (let i = 0; i < passwordLength ; i++) {
            let element = Math.round(Math.random() * charList.length)
            password += charList[element]
         }
    }

    showOutput(password);
    document.getElementById('userinput').value = ""
}

// TypeCasting string to number 
function handleTypeCasting() {
    let value =  document.getElementById('userinput').value
    
    if(!value){
        alert("Enter the Value")
    }else{
        showOutput(typeof(parseInt(value)))
    }

    document.getElementById('userinput').value = ""
}

// handle length of decimal point
function handleLength() {
    let userValue =  document.getElementById('userinput').value
    let numericValue = parseFloat(userValue)
    let formatValue = null
    if(!numericValue){
        formatValue = num.toFixed(3)
       
    }else{
        formatValue = numericValue.toFixed(3)
        
    }

    showOutput(formatValue)
    document.getElementById('userinput').value = ""
}

// calculate GST
function handleGST() {
    let value =  document.getElementById('userinput').value
    let result = null
    if(!value){
        alert("Enter the Value on which GST Calculate")
    }else{
        result = value * 18 / 100
    }
    let totalValue = parseInt(value) + result
    showOutput(totalValue)

    document.getElementById('userinput').value = ""
}

// clear Output / results
function handleClearBtn() {
    showOutput("");
}

// clear input field
function handleInputClear() {
    document.getElementById('userinput').value = ""
}