const imgPlaceholder = document.querySelector('img');
const nextBtn        = document.querySelector('button[name=next]');


const defaultImg = 'https://www.filepicker.io/api/file/GbYiJppTxiv61hWAL3o9'
imgPlaceholder.src = defaultImg;

nextBtn.addEventListener('click',getNext);


function getNext() {

    console.log('load next image');

    
}