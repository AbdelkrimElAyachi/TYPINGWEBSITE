
export function applyUI(state){
    console.log(state);

    document.body.className = state.ui.theme;
    if(state.ui.isParamsDisplayed){
        document.getElementById("params").style.left = "0px";
    }
    else{
        document.getElementById("params").style.left = "-80%";
    }

    document.getElementById("easy").style.color = "#fff"
    document.getElementById("normal").style.color = "#fff"
    document.getElementById("hard").style.color = "#fff"
    
    document.getElementById(state.difficulty).style.color = "var(--third)";

    document.getElementById("black-green").style.color = "#fff";
    document.getElementById("black-blue").style.color = "#fff";

    document.getElementById(state.ui.theme).style.color = "var(--third)";


}

