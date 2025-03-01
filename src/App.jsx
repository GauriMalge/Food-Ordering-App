import {CartContextProvider} from "./store/CartContext.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";

import Cart from "./components/Cart.jsx";
import UserProgressContext, { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <>
    
    
    <UserProgressContextProvider>

    <CartContextProvider>
          <Checkout/>
          <Cart/>
          <Header/>
          <Meals/>
          
</CartContextProvider>

    </UserProgressContextProvider>
   

   
   
      
    
   
   
    </>
  );
}

export default App;
