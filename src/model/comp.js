import updateCompDisplay  from '../update-comp-display';
import { compMessage, compScoreDisplay } from './model';

const comp = {
    guessOptions: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    updatedOptions: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    guess: '',
    hand: [],
    message: compMessage,
    updateCards: updateCompDisplay,
    updateScore: updateScoreDisplay,
    resetGuessOptions: resetGuessOpts,
    score: 0,
}


const updateScoreDisplay = () =>{
    {
        compScoreDisplay.innerHTML = `Computer: ${comp.score}`;
    }
}



const resetGuessOpts = () =>{
    {
        comp.guessOptions = comp.updatedOptions;
    }
}


export default comp;