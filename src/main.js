// importing all the important functions and classes 
import Test from "./utils/Test.js";
import { getState } from "./utils/state.js";

// getting state from localStorage if it exists initialize it if it doesn't
let state = getState()


/* 
    Since i'm  using vue in index.html whenever user change something like difficulty it gets stored in the local storage
    But the state in this file main.js does not change so to make sure the state in this file keep updated 
    updated i updated by listening on input element and whenver there is change i get it from the localStorage
*/
function updateState(){
    state = getState();
    console.log(state);
}


 
// test_element the element when the words will appear 
let test_element = document.getElementById("test");
// the info element the element when information like current wrong words or character or the last time 
let info_element = document.getElementById("info");





let duration_en_seconds = state.duration*60;
let difficulty = state.difficulty;
let sound = state.sound;
let text_lines = [
    "this is the first line of text you should be ashamed of yourself if you can't finish it",
    "congratulation you are not loser but you're still below average so don't lose here",
    "!!! you are not a bad typing person you are average that's a surprise ??? Congratulation my frined",
    "you're keeping surprising me you're showing that you are better than the average my frined",
    "if we take 10 random people and compete them in typing you will be one of the top 5 between them",
    "you know you are showing that you are pro if you arrive at this place you're either a gamer or nerd"
]

let typing_text = new Test(
    difficulty,
    duration_en_seconds,
    sound,
    text_lines,
    test_element,
    info_element,
);



window.addEventListener("keyup",(e)=>{
    typing_text.buttonClicked(e.key);
})


setInterval(function() {
    typing_text.anotherSecond();
}, 1000);


// when the values of those inputs change we should update our states
// select input of the sound 
document.getElementById("sound").onchange = updateState;
// duration change 
document.getElementById("duration").onchange = updateState;
// difficulty change
document.getElementById("easy").onclick = updateState;
document.getElementById("normal").onclick = updateState;
document.getElementById("hard").onclick = updateState;

