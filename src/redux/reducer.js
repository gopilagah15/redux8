import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data=[],action)=>{ 
    switch(action.type){
        case ADD_TO_CART:
            console.log('ADD_TO_CART condition called',action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.log('REMOVE_FROM_CART condition called')
            return 1+1
        default:
            return []
    }
      
} 