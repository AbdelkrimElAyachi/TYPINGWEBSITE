import reducer from "./reducer.js";

function createStore(reducer){
    let state ;
    let callback ;

    
    function getState(){
        return state;
    }

    function subscribe(callback){
        callback = callback;
    }

    function dispatch(action){
        state = reducer(state,action);
        if(typeof callback === 'function'){
            callback(state)
        }
    }

    return{
        getState,
        dispatch,
        subscribe
    }
    
}


// definig the store where the parametres will get save
const store = createStore(reducer);
store.dispatch({type:"INIT"})

export default store;