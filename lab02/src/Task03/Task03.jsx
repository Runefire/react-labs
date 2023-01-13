import {useNavigate} from "react-router-dom";
import Cart from "./Cart";
import {Button} from "antd";

const Task03 = () => {
  const navigate = useNavigate();
  
  const products = [
    {name: "Harry Potter Philosopher's Stone", price: 20},
    {name: "I'm Glad My Mom Died", price: 18},
    {name: "It Ends with Us: A Novel", price: 8, max: 5}
  ];
  
  return (
    <div>
      <h3>Task03</h3>
      
      <Cart products={products}/>
      
      <Button style={{marginTop: '20px'}} onClick={() => navigate('/')}>To home</Button>
    </div>
  );
};

export default Task03;