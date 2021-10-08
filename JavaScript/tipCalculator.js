let billAmount = Number(prompt('Please enter bill amount'))
let tipRate = Number(prompt('Please enter tip rate'))

console.log(`Tip amount is ${billAmount*tipRate/100} and total Bill is ${billAmount*(billAmount+tipRate)/100}.`)