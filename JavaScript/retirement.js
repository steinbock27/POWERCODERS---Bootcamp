let age = prompt('What is your age?')
let retire = prompt('At what age would you like to retire?')
let currentYear = new Date().getFullYear()

console.log(`You have ${retire-age} left until you can retire.`)
console.log(`It's ${currentYear}, so you can retire in ${currentYear + retire - age}`)