function validateNo(inputTel) {
    (String(inputTel).match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) ? console.log(`Your phone number is ${inputTel}`)
    : alert('Please enter your phone number correctly!');
    
}