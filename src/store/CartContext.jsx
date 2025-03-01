import { createContext, useReducer } from "react";

const CartContext = createContext({
    items:[],
    addItem: (item)=>{},
    removeItem: (id)=>{}
})


function reducer(state,action){
    if(action.type === 'ADD_ITEM'){
        //...to add item
        const existingCartItemIndex = state.items.findIndex(   //checking if selected item exists 
            (item)=> item.id === action.item.id);

            const updatedItems = [...state.items];     // creating copy of  all meals in the cart


            if(existingCartItemIndex > -1){        // if item exists
                const existingItem = state.items[existingCartItemIndex];
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            }else{                                 // if item doesnot exists
                updatedItems.push({...action.item,quantity:1});
            }
            return {...state,items: updatedItems}
    }

    if(action.type === 'REMOVE_ITEM'){
        //remove item
        const existingCartItemIndex = state.items.findIndex(
            (item)=> item.id === action.id);
         const existingCartItem = state.items[existingCartItemIndex];
         const updatedItems = [...state.items]; //creating new array based on old items in cart

        if(existingCartItem.quantity === 1){
            //remove entire item from cart
           
            updatedItems.splice(existingCartItemIndex,1)
        }else{
            //decrease item quantity count by 1
            const updatedItem = {
                ...existingCartItem,
                quantity:existingCartItem.quantity -1,

            }
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {...state, items: updatedItems}
    }
    return state;
}


export function CartContextProvider({children}){
   const [cart ,dispatchCartAction] = useReducer(reducer,{items:[]})
  
   function addItem(item){
      dispatchCartAction({type:'ADD_ITEM',item: item})
   }

   function removeItem(id){
    dispatchCartAction({type:'REMOVE_ITEM',id:id})
   }
   
   const cartContext ={
    items : cart.items,
    addItem:addItem,
    removeItem:removeItem,
   }
console.log(cartContext)
   

    return <CartContext.Provider value={cartContext}> {children} </CartContext.Provider>
}

export default CartContext;