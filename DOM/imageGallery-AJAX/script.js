const imgPlaceholder = document.querySelector('img');
const nextBtn        = document.querySelector('button[name=next]');


const defaultImg = 'https://www.filepicker.io/api/file/GbYiJppTxiv61hWAL3o9'
imgPlaceholder.src = defaultImg;

nextBtn.addEventListener('click',getNext);


function getNext() {

    const urlAddress= 'https://api.thecatapi.com/v1/images/search';
    //Cat image API
    fetch(urlAddress)
    .then(response => response.json())
    .then(data => imgPlaceholder.src=data[0].url)
    
}