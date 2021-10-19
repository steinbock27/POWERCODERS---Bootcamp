const hammingDistance = (str1 = '', str2 = '') => {
    str1 = document.getElementById('one').value;
    str2 = document.getElementById('two').value;
   if (str1.length !== str2.length) {
      alert('Enter the string with same length!')
   }
   let dist = 0;
   for (let i = 0; i < str1.length; i += 1) {
      if (str1[i] !== str2[i]) {
         dist += 1;
      };
   };
   document.getElementById('a').innerHTML= dist;
};

