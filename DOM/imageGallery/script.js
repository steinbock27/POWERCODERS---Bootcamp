const imgPlaceholder = document.querySelector('img');
const prevBtn        = document.querySelector('button[name=prev]');
const nextBtn        = document.querySelector('button[name=next]');

let arrImages = [
    'https://i.pinimg.com/564x/11/4c/78/114c788ae9d63646e3b0f5e9437098c9.jpg', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', 
    'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg'
];

let currentIndex = 1;
let defaultImg = arrImages [currentIndex];
imgPlaceholder.src = defaultImg;

/* 
prevBtn.addEventListener('click',()=>{console.log('prevBtn clicked')});
nextBtn.addEventListener('click',()=>{console.log('nextBtn clicked')}); */

prevBtn.addEventListener('click', getPrev);
nextBtn.addEventListener('click',getNext);

function getPrev(){
currentIndex = currentIndex -1;
if (currentIndex > -1) {
    imgPlaceholder.src = arrImages[currentIndex];
}else{
    currentIndex = arrayImages.length-1;
    imgPlaceholder.src = arrImages[currentIndex];

}
}

function getNext() {
    currentIndex = currentIndex +1;
    if (currentIndex < arrImages.length) {
        imgPlaceholder.src = arrImages[currentIndex];
    }else{
        currentIndex = 0;
        imgPlaceholder.src = arrImages[currentIndex];

    }

    
}