// importing all the important functions and classes 
import Test from "./utils/Test.js";
import { get_state,get_texts } from "./utils/state.js";

// getting state from localStorage if it exists initialize it if it doesn't
let state = get_state()

/* 
    Since i'm  using vue in index.html whenever user change something like difficulty it gets stored in the local storage
    But the state in this file main.js does not change so to make sure the state in this file keep updated 
    updated i updated by listening on input element and whenver there is change i get it from the localStorage
*/
function update_state(){
    state = get_state();
    console.log(state);
}



// elemtn to display how much time left
let timer_element = document.getElementById("timer");
// test_element the element when the words will appear 
let test_element = document.getElementById("test");
// the info element the element when information like current wrong words or character or the last time 
let info_element = document.getElementById("info");





let texts = await get_texts(state.difficulty,state.subject);

let typing_text = new Test(
    state.difficulty,
    (state.duration * 60)+1,
    state.sound,
    texts,
    test_element,
    info_element,
    timer_element,
);



window.addEventListener("keyup",(e)=>{
    typing_text.buttonClicked(e.key);
})


setInterval(function() {
    if(!typing_text.test_finished && typing_text.test_started)  typing_text.anotherSecond();
}, 1000);


document.getElementById("btn-start-test").addEventListener('click',()=>{
    update_state();
    let duration_en_seconds = (state.duration*60)+1;
    let difficulty = state.difficulty;
    let sound = state.sound;
    typing_text.startTest(sound,duration_en_seconds,difficulty);
});

document.getElementById("btn-restart-test").addEventListener("click",async()=>{
    update_state();
    let texts = await get_texts(state.difficulty,state.subject);
    typing_text.restart(
        state.sound,
        (state.duration * 60) + 1,
        state.difficulty,
        texts
        );
})
