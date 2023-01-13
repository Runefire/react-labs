import React, {Component, useState} from 'react';
import {useNavigate} from "react-router-dom";

// Використовувти fullAddress та fullName у state не рекомендує документація:
// https://ru.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#anti-pattern-unconditionally-copying-props-to-state

class Address extends Component {
  render() {
    const fullAddress =  this.props.city + ', ' + this.props.street;
    
    return (
      <div>
        Full Address: {fullAddress}
      </div>
    );
  }
}

class User extends Component {
  render() {
    const fullName = this.props.user.firstName + ' ' + this.props.user.lastName;
    
    return (
      <div>
        <div>
          Full Name: {fullName}
        </div>
        
        <Address city={this.props.user.address.city} street={this.props.user.address.street}/>
      </div>
    );
  }
}

const Task07 = () => {
  const navigate = useNavigate();
  
  const users = [
    {id: 1, firstName: 'John', lastName: 'Smith', address: {street: '123 Main Street', city: 'San Francisco'}},
    {id: 2, firstName: 'Simon', lastName: 'Lenn', address: {street: '30 Yellow Street', city: 'Chicago'}},
    {id: 3, firstName: 'Anna', lastName: 'Gold', address: {street: '31 Blue Street', city: 'Miami'}},
    {id: 4, firstName: 'Vasyl', lastName: 'Kozliuk', address: {street: '7 Vinnytsia Street', city: 'Zhytomyr'}},
    {id: 5, firstName: 'Valeria', lastName: 'Miroshnykova', address: {street: '48 Bykova Street', city: 'Odessa'}},
  ];
  
  const findUserById = (id = 1) => {
    return users.filter(user => user.id === id)[0];
  }
  
  const [user, setUser] = useState( findUserById() );
  
  return (
    <div>
      <h2>Task07</h2>
  
      <select name="usersList" onChange={(e) => setUser( findUserById( parseInt(e.target.value)) ) }>
        {users.map(user => <option key={user.id} value={user.id}>{user.firstName}</option>)}
      </select>
      <br/>
      
      <User user={user}/>
      
      <button style={{marginTop: '10px'}} onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task07;