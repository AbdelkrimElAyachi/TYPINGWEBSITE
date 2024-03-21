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


export async function get_texts(difficulty,subject){

    async function fetch_texts(title){
        const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&exlimit=1&titles=${title}&explaintext=1&format=json&formatversion=2&origin=*`);
        const data = await response.json();
        console.log("data inside fetch_texts");
        console.log(data.query.pages[0]);
        return data.query.pages[0];
    }
    const texts = await fetch_texts(subject);
    return (texts.extract.split(','));

}