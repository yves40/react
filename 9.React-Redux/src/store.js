import {configureStore} from '@reduxjs/toolkit'
import counter from './reduxfeatures/counter'
import fruits from './reduxfeatures/fruits'
import cart from './reduxfeatures/cart'

export const store = configureStore({
    reducer: {
        counter,
        fruits,
        cart
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware)
})
// function customMiddleware (store) {
//     return function(next) {
//         return function(action) {
            // console.log(store);
            // console.log(store.getState());
            // console.log(next);
            // console.log(action);
//             next({
//                 type: 'cart/addOne',
//                 payload: {
//                     name: 'Mangue',
//                     url: "/images/mango.jpg",
//                     price: 999,
//                     id: 82930302                    
//                 }
//             })
//         }
//     }
// }
