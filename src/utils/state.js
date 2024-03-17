export function get_state(){
    const initParams = {
        duration:"1",
        language:"en",
        difficulty:"easy",
        sound:"cherryBlue",
    }

    const params = JSON.parse(localStorage.getItem("params")) || initParams;
    return params;
}


export function get_texts(difficulty){
    return [
        "this is the first line of text you should be ashamed of yourself if you can't finish it",
        "congratulation you are not loser but you're still below average so don't lose here",
        "!!! you are not a bad typing person you are average that's a surprise ??? Congratulation my frined",
        "you're keeping surprising me you're showing that you are better than the average my frined",
        "if we take 10 random people and compete them in typing you will be one of the top 5 between them",
        "you know you are showing that you are pro if you arrive at this place you're either a gamer or nerd"
    ];
}