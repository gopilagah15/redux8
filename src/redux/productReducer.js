import { PRODUCT_LIST} from "./constant";

export const productData = (data=[],action)=>{ 
    switch(action.type){
        case PRODUCT_LIST:
            console.log('ADD_TO_CART condition called',action)
            return [action.data]
        
        default:
            return data
    }
      
} 