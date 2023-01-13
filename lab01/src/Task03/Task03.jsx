import {useNavigate} from "react-router-dom";

const Product = ({product}) => {
  return (
    <div>
      I'm a {product.name}
    </div>
  );
};

const Task03 = () => {
  const navigate = useNavigate();
  
  const products = [
    {name: 'Meizu M5 Note'},
    {name: 'Asus 3000'},
    {name: 'iPhone12 Plus'},
  ];
  
  return (
    <div>
      <h2>Task03</h2>
      
      {products.map(product => <Product id= {product.id} product={product}/>)}
      
      <button style={{marginTop: '10px'}} onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task03;