const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: './images/01.jepg',name: '01'},
    { imgSrc: './images/02.jepg',name: '02'},
    { imgSrc: './images/03.jpg',name: '03'},
    { imgSrc: './images/04.jpg',name: '04'},
    { imgSrc: './images/05.jpg',name: '05'},
    { imgSrc: './images/06.png',name: '06'},
    { imgSrc: './images/07.jpg',name: '07'},
    { imgSrc: './images/08.jpg',name: '08'},
    { imgSrc: './images/01.jepg',name: '01'},
    { imgSrc: './images/02.jepg',name: '02'},
    { imgSrc: './images/03.jpg',name: '03'},
    { imgSrc: './images/04.jpg',name: '04'},
    { imgSrc: './images/05.jpg',name: '05'},
    { imgSrc: './images/06.png',name: '06'},
    { imgSrc: './images/07.jpg',name: '07'},
    { imgSrc: './images/08.jpg',name: '08'},
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
    console.log(cardData);
}

randomize()