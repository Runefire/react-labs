import {useNavigate} from "react-router-dom";
import React, {Component} from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    
    this.state = {color: "red"};
    this.colors = ["red", "green", "yellow", "blue"];
  }
  
  changeColor(color) {
    this.setState({color: color});
  }
  
  render() {
    return (
      <div>
        <p>I'm a <b>{this.state.color}</b> {this.props.product.name}</p>
        <br/>
        
        <select name="colours" onChange={e => this.changeColor(e.target.value)}>
          {this.colors.map(color =>
            <option>{color}</option>
          )}
        </select>
      </div>
    );
  }
}

const Task06 = () => {
  const navigate = useNavigate();
  
  const product = {name: 'Meizu M5 Note'}
  
  return (
    <div>
      <h2>Task06</h2>
      
      <Product product={product}/>
      <br/>
      
      <button style={{marginTop: '10px'}} onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task06;