import React, {Component} from 'react';
import {useNavigate} from "react-router-dom";

class Product extends Component {
  render() {
    return (
      <div>
        I'm a {this.props.product.name}
      </div>
    );
  }
}

const Task04 = () => {
  const navigate = useNavigate();
  
  const products = [
    {name: 'Laptop'},
    {name: 'Computer'},
    {name: 'Mobile Device'},
  ];
  
  return (
    <div>
      <h2>Task04</h2>
  
      {products.map(product => <Product id= {product.id} product={product}/>)}
      
      <button style={{marginTop: '10px'}} onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task04;