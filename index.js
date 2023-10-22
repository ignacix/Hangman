const words = ['javascript', 'developer', 'computer', 'programming', 'hangman'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = [];
let attempts = 6;
let count= 0;
let textcount =0;
function changeImage(){

    textcount++;
    switch(textcount){
        case 1:
            document.getElementById("btn").textContent = "Next";
            break;
    }
    
    count++;
    switch(count){
        case 1:
            document.getElementById("imagen").src = "resources/2.jpeg";            
            break;
        case 2:
            document.getElementById("imagen").src = "resources/3.png";            
            break;
        case 3:
            document.getElementById("imagen").src = "resources/4.png";            
            break;
        case 4:
            document.getElementById("imagen").src = "resources/5.png";                            
            break;
        case 5:
            document.getElementById("imagen").src = "resources/6.png";
            document.getElementById("botonera").style.display="none";
            document.getElementById("botonera2").style.display="flex";
            document.getElementById("botonera2").style.flexDirection="column";                        
            break;       
    }
}
function displayWord() {
    let display = '';
    for (let letter of selectedWord) {
        if (guessedWord.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    document.getElementById('word-display').textContent = display;
}

function updateGuessedLetters(letter) {
    if (!guessedWord.includes(letter)) {
        guessedWord.push(letter);
        document.getElementById('guessed-letters').textContent = guessedWord.join(', ');

        if (!selectedWord.includes(letter)) {
            attempts--;
            document.getElementById('attempts').textContent = attempts;
            
            switch(attempts){
                case 5:
                    document.getElementById("imagen").src = "resources/h5.jpeg";
                    break;
                case 4:
                    document.getElementById("imagen").src = "resources/h4.jpeg";
                    break;
                case 3:
                    document.getElementById("imagen").src = "resources/h3.jpeg";
                    break;
                case 2:
                    document.getElementById("imagen").src = "resources/h2.jpeg";
                    break;
                case 1:
                    document.getElementById("imagen").src = "resources/h1.jpeg";
                    break;                
            }
        }
    }
}

function checkWin() {
    if (!document.getElementById('word-display').textContent.includes('_')) {
        alert('¡YOU WON! The word was: ' + selectedWord);
        resetGame();
    } else if (attempts === 0) {        
        alert('YOU LOSE. The word was: ' + selectedWord);
        resetGame();
    }
}

function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = [];
    attempts = 6;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('guessed-letters').textContent = '';
    document.getElementById("imagen").src = "resources/6.png";
    displayWord();
}

function guessLetter() {
    const input = document.getElementById('guess');
    const letter = input.value.toLowerCase();

    if (letter.length !== 1 || !letter.match(/[a-z]/i)) {
        alert('Please enter a valid letter.');
    } else if (guessedWord.includes(letter)) {
        alert('You already entere this letter.');
    } else {
        updateGuessedLetters(letter);
        displayWord();
        checkWin();
    }

    input.value = '';
}

displayWord();