const initialState = {
    duration:"1",
    language:"en",
    difficulty:"easy",
    sound:"click",
    ui:{
        isParamsDisplayed : false,
        theme:"black-green",
    }
    
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case "INIT":
            return state
        case "DURATION":
            return {...state,duration:action.payload}    
        case "UI":
            return {...state,ui:action.payload}    
        case "PARAMS":
            return {...action.payload}
        default:
            return state
    }
}