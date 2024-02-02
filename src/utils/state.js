export function getState(){
    const initParams = {
        duration:"1",
        language:"en",
        difficulty:"easy",
        sound:"cherryBlue",
    }

    const params = JSON.parse(localStorage.getItem("params")) || initParams;
    return params;
}
