import {useState} from 'react';
import CartItem from "./CartItem";
import styles from "./cart.css";

const Cart = ({products}) => {
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  return (
    <div>
      <h1>Cart</h1>
      
      <table>
        <tr className={"header"}>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </table>
  
      {products.map(p =>
        <CartItem totalPrice={setTotalPrice} totalCount={setTotalCount} name={p.name} price={p.price} min={p.min} max={p.max}/>
      )}
      
      <tr className={"footer"}>
        <td colSpan={2}>
          <b>Totals</b>
        </td>
        
        <td>
          {totalCount}
        </td>
        
        <td>
          {totalPrice}
        </td>
      </tr>
    </div>
  );
};

export default Cart;
