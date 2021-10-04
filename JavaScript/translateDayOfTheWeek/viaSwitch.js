let day = prompt('Please choose the day you would like learn it\'s german translation...').toLowerCase();
let derTag='';
switch(day){
    case 'monday':
        derTag='Montag'
        break;
    case 'tuesday':
        derTag='Dienstag'
        break;
    case 'wednesday':
        derTag='Mittwoch'
        break;
    case 'thursday':
        derTag='Donnerstag'
        break;
    case 'friday':
        derTag='Freitag'
        break;
    case 'saturday':
        derTag='Samstag'
        break;
    case 'sunday':
        derTag='Sunday'
        break;
}
console.log(`German translation of ${day} is ${derTag}.`)