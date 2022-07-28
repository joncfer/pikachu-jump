
const pikachu = document.querySelector('.pikachu');
const pokebola = document.querySelector('.pokebola');
const gameOver = document.querySelector('.gameOver');
const mensagemFinal = document.querySelector('.mensagemFinal');
const botaoReiniciar = document.querySelector('.botaoReiniciar');

const jump = () => {

    pikachu.classList.add('jump');
    pikachu.src = "Images/PikachuJumpUp.png";

    setTimeout(() => {

        pikachu.classList.remove('jump');
        pikachu.src = "Images/PikachuRunning.gif";
        
    }, 500);
}

const loop = setInterval(() => {

    const pokebolaPosition = pokebola.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');
    console.log(pikachuPosition);
    
    if(pokebolaPosition <= 210 && pokebolaPosition >= 100 && pikachuPosition < 40) {

        pokebola.style.animation = 'none';
        pokebola.style.left = `${pokebolaPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;
        pikachu.src = "Images/PikachuGameOver.png"

        mensagemFinal.style.animation = 'fadeIn 5s';
        mensagemFinal.style.visibility = 'visible';



        setTimeout(() => {
            gameOver.style.animation = 'fadeIn 1s';
            gameOver.style.visibility = 'visible';
            pikachu.style.visibility ='hidden';
            pokebola.style.visibility = 'hidden';
            
            botaoReiniciar.style.animation = 'fadeIn 3s';
            botaoReiniciar.style.visibility = 'visible';

            clearInterval(loop);  

        },800)  
              
    } 

    

} ,10)

document.addEventListener('keydown', jump);     