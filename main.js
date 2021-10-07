const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 7;

// playerLivesCount.textContent = playerLives;

let lives = document.querySelector('.lives');

function renderLives() {
    lives.innerHTML = ''
    for (i = 0; i < playerLives; i++) {
        lives.innerHTML += `<img src="./images/heart.png" class="heart" alt="">`
    }
};

const getData = () => [
    { imgSrc: './images/01.jpeg', name: '01' },
    { imgSrc: './images/02.jpeg', name: '02' },
    { imgSrc: './images/03.jpg', name: '03' },
    { imgSrc: './images/04.jpg', name: '04' },
    { imgSrc: './images/05.jpg', name: '05' },
    { imgSrc: './images/06.png', name: '06' },
    { imgSrc: './images/07.jpg', name: '07' },
    { imgSrc: './images/08.jpg', name: '08' },
    { imgSrc: './images/01.jpeg', name: '01' },
    { imgSrc: './images/02.jpeg', name: '02' },
    { imgSrc: './images/03.jpg', name: '03' },
    { imgSrc: './images/04.jpg', name: '04' },
    { imgSrc: './images/05.jpg', name: '05' },
    { imgSrc: './images/06.png', name: '06' },
    { imgSrc: './images/07.jpg', name: '07' },
    { imgSrc: './images/08.jpg', name: '08' },
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();
    renderLives();
    cardData.forEach(() => {
        section.innerHTML += `<div class="card"></div>`;
    })
    let cards = document.querySelectorAll('.card');

    cards.forEach((item, index) => {
        item.innerHTML += `<img src="${cardData[index]['imgSrc']}" class="face">`;
        item.innerHTML += `<div class="back"></div>`

        item.addEventListener('click', (e) => {
            item.classList.toggle('toggleCard');
            checkCard(e);
        })
        item.setAttribute('name', cardData[index].name);
        console.log(item);
    })
};

const checkCard = (e) => {
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');

    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            flippedCards.forEach((item) => {
                item.classList.remove('flipped');
                item.style.pointerEvents = 'none';
            })
        } else {
            flippedCards.forEach((item) => {
                item.classList.remove('flipped');
                setTimeout(() => {
                    item.classList.remove('toggleCard');
                }, 1000);
            });
            playerLives--;
            // playerLivesCount.textContent = playerLives;
            renderLives();
            if (playerLives == 0) {
                restart();
            }
        }
    }
    if (toggleCard.length === 16) {
        console.log('winiwnwinnwinwinwi');
        playerLivesCount.textContent = '贏了!你好棒!'
    }
};

// 重新開始
const restart = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');

        setTimeout(() => {
            cards[index].style.pointerEvents = 'All';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'All';
        }, 1000);
    });
    playerLives = 7;
    renderLives();
};

cardGenerator();