import{ useState } from "react";
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  function showCardHandler(){
    setCartIsShown(true);
  }
  function hideCartHandler(){
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      <Card />
      {cartIsShown && <div>Card...</div>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
