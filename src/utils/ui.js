
export function applyUI(state){
    console.log(state);

    document.body.className = state.ui.theme;
    if(state.ui.isParamsDisplayed){
        document.getElementById("params").style.left = "0px";
    }
    else{
        document.getElementById("params").style.left = "-80%";
    }

    document.getElementById("easy").style.color = "var(--secondary)";
    document.getElementById("normal").style.color = "var(--secondary)";
    document.getElementById("hard").style.color = "var(--secondary)";
    
    document.getElementById(state.difficulty).style.color = "var(--third)";

    document.getElementById("black-green").style.color = "var(--secondary)";
    document.getElementById("white-green").style.color = "var(--secondary)";

    document.getElementById(state.ui.theme).style.color = "var(--third)";


}

