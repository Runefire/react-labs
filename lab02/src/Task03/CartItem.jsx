import {useState} from 'react';
import {Button} from "antd";
import {AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";

const CartItem = ({name, price, min, max, totalCount, totalPrice}) => {
  const [count, setCount] = useState(0);
  
  const handlePlus = () => {
    if (count < max) {
      setCount(count + 1);
      
      totalCount(prev => prev + 1);
      totalPrice(prev => prev + price);
    }
  }
  
  const handleMinus = () => {
    if (count > min) {
      setCount(count - 1);
  
      totalCount(prev => prev - 1);
      totalPrice(prev => prev - price);
    }
  }
  
  return (
    <tr>
      <td>
        <span>{name}</span>
      </td>
  
      <td>
        <span>{price}</span>
      </td>
      
      <td>
        <Button ghost onClick={handlePlus}>
          <AiOutlinePlusSquare size={20} color={"green"}/>
        </Button>
  
        {count === max || count === min ? <span style={{background: 'red'}}>{count}</span> : <span>{count}</span>}
        
        <Button ghost onClick={handleMinus}>
          <AiOutlineMinusSquare size={20} color={"red"}/>
        </Button>
      </td>
  
      <td>
        <span>{count * price}</span>
      </td>
    </tr>
  );
};

CartItem.defaultProps = {
  name: 'default',
  price: 0,
  min: 0,
  max: Number.MAX_SAFE_INTEGER
}

export default CartItem;