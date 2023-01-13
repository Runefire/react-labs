import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    
    axios.get(url).then(response => {
      setUsers(response.data);
    });
  }, []);
  
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>User</h2>
  
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{width: '40%', border: '1px solid blue', padding: '10px', height: '400px'}}>
          <h3 style={{textAlign: 'center'}}>User List</h3>
      
          <ul>
            {users.map(user =>
              <li style={{cursor: 'pointer', textDecoration: 'underline', color: 'blue', marginTop: '8px'}}
                  key={user.id}
                  onClick={() => setCurrentUser(user)}>
                {user.name}
              </li>
            )}
          </ul>
        </div>
    
        <div style={{width: '60%', border: '1px solid blue', marginRight: '50px', padding: '10px', height: '400px'}}>
          <h3 style={{textAlign: 'center'}}>User View</h3>
      
          {currentUser &&
            <>
              <p><b>Name:</b> {currentUser.name}</p>
              <p><b>Username:</b> {currentUser.username}</p>
              <p><b>Email:</b> {currentUser.email}</p>
              <p><b>Phone:</b> {currentUser.phone}</p>
              <p><b>Website:</b> {currentUser.website}</p>
              <p><b>Address:</b> {`${currentUser.address.city}, ${currentUser.address.street}, ${currentUser.address.suite}`}</p>
              <p><b>Company:</b> {`${currentUser.company.name} ("${currentUser.company.catchPhrase}")`}</p>
            </>
          }
        </div>
      </div>
    </div>
  );
};

const Task08 = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h2>Task08</h2>
  
      <User/>
      <button style={{marginTop: '10px'}} onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task08;