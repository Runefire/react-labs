import React, {Component} from 'react';
import {useNavigate} from "react-router-dom";

class City extends Component {
  render() {
    return (
      <option>
       {this.props.city.name}
      </option>
    );
  }
}

class CityList extends Component {
  render() {
    return (
      <div>
        <select id="citiesList">
          {this.props.cities.map((city) => <City key={city.id} city={city}/>)}
        </select>
      </div>
    );
  }
}

const Task05 = () => {
  const navigate = useNavigate();
  
  const cities = [
    {id: 1, name: 'Korosten', image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Coat_of_Arms_Korosten.jpg'},
    {id: 2, name: 'Ovruch', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Ovruch_gerb.png'},
    {id: 3, name: 'Olevsk', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/COA_of_Olevsk.png'}
  ];
  
  return (
    <div>
      <h2>Task05</h2>
      
      <CityList cities={cities}/>
      
      <button style={{marginTop: '10px'}} onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task05;