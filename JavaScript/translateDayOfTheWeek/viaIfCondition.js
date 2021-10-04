let day = prompt('Please choose the day you would like learn it\'s german translation...').toLowerCase();
let derTag='';
             if     (day == 'monday')   {derTag = 'Montag';}
             else if(day == 'tuesday')  {derTag = 'Dienstag';}
             else if(day == 'wednesday'){derTag = 'Mittwoch';console.log('Nice try!');}
             else if(day == 'thursday') {derTag = 'Donnerstag';}
             else if(day == 'friday')   {derTag = 'Freitag';}
             else if(day == 'saturday') {derTag = 'Samstag';}
             else if(day == 'sunday')   {derTag = 'Sonntag';}

console.log(`German translation of ${day} is ${derTag}. `)
