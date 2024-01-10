

export default function createStore(reducer){
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