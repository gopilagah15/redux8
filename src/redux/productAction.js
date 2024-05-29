import {PRODUCT_LIST } from "./constant";

export const productList =async()=>{
    let data = await fetch('https');
    data = await data.json();
    console.log('action productList called', data);
    return {
        type:PRODUCT_LIST,
        data
    }
} 