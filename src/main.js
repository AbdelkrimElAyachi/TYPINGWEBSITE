// importing all the important functions and classes 
import Test from "./utils/Test.js";
import { getState, getUiState } from "./utils/state.js";

const state = getState()
let ui = getUiState()




 

let test_element = document.getElementById("test");
let info_element = document.getElementById("info");

let duration_en_seconds = state.duration*60;
let difficulty = state.difficulty;
let sound_path = "./public/assets/sounds/keyboard.wav";

let text_lines = [
    "this is the fist line of text yoku should be ashamed of yourself if you didn't finish it",
    "congratulation you are not loser but you're still below average so don't lose here",
    "!!! you are not a bad typing person you are average that's a surprise ??? Congratulation my frined",
    "you're keeping surprising me you're showing that you are better than the average my frined",
    "if we take 10 random people and compete them in typing you will be one of the top 5 between them",
    "you know you are showing that you are pro if you arrive at this place you're either a gamer or nerd"
]

let typing_text = new Test(
    difficulty,
    duration_en_seconds,
    test_element,
    info_element,
    sound_path,
    text_lines
);



window.addEventListener("keyup",(e)=>{
    typing_text.buttonClicked(e.key);
})


setInterval(function() {
    typing_text.anotherSecond();
}, 1000);



