// importing all the important functions and classes 
import createStore from "./store/store.js";
import reducer from "./store/reducer.js";
import { applyUI } from "./utils/ui.js";

// definig the store where the parametres will get save
const store = createStore(reducer);
store.dispatch({type:"INIT"})
applyUI(store.getState());


export default store;

//  use 







