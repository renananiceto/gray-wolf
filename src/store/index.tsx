import { createStore } from "redux";

//reduses

const animals = (state = [],action:{type :string, payload:any}) =>{
  switch(action.type){
    case "SET_ANIMALS" :
      return {...action.payload}
      default : return state
  }
}

export const store = createStore(animals)