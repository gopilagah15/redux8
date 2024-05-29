import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data=[],action)=>{ 
    switch(action.type){
        case ADD_TO_CART:
            console.log('ADD_TO_CART condition called',action)
            return [action.data, ...data]
        case REMOVE_FROM_CART:
            console.log('REMOVE_FROM_CART condition called',action);
            const remainigItem =data.filter((item)=>item.id!==action.data)
           
            return [...remainigItem]
        case EMPTY_CART:
            console.log('EMPTY_CART condition called',action);
            data=[];
            return [...data]
        default:
            return data
    }
      
} 