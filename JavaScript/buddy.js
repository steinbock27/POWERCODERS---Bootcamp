let x = 50;
let number = prompt(`Think about a number between 1 and 100. Is your number higher, lower or equal to ${x}?`);

do {
    (number === 'higher') ? x=x+Math.round(x/2) : x=Math.round(x/2) ;

    number = prompt(`Is your number higher, lower or equal to ${x}?`);
    
} while (!(number ==='equal'));

console.log(`Your number is ${x}, right?`)