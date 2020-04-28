/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//test constructor
// const phrase = new Phrase();
// const game = new Game();

// console.log(phrase);
// console.log(game);

//test methods
// const phrase = new Phrase('Life is like a box of chocolates'); 
// console.log(`Phrase - phrase: ${phrase.phrase}`);

//test add phrases
// const game = new Game();
// game.phrases.forEach((phrase, index) => { console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//get random phrase
// const logPhrase = (phrase) => { 
//     console.log(`Phrase - phrase: `, phrase.phrase);
// }; 
// const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase()); 
// logPhrase(game.getRandomPhrase()); 
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// const randomPhrase = game.getRandomPhrase(); const phrase = new Phrase(randomPhrase.phrase); phrase.addPhraseToDisplay();


// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;
const resetButton = document.getElementById('btn__reset');

resetButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
    })
    
const keys = document.querySelectorAll(".key");

keys.forEach( key => {
    key.addEventListener('click', (e) => {
         game.handleInteraction(e.target)      
    })
})

let keyboard = (event) => {
    game.handleInteraction(event);    

};

document.addEventListener("keydown",(event) => {

    let selected = event.key;
    let allKeys = document.getElementsByClassName('key');
    let selectKeyElement;
    for(let i = 0; i < allKeys.length; i += 1){

        if(allKeys[i].innerHTML === selected) {
            selectKeyElement = allKeys[i]; 
        };
    };
    
    keyboard(selectKeyElement);

});