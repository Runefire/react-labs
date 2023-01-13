import {useNavigate} from "react-router-dom";

const Task01 = () => {
  const navigate = useNavigate();
  
  const myName = `Taras`;
  
  return (
    <div>
      <h2>Task01</h2>
      
      <h1>Hello, <strong>{myName}!</strong></h1>
      
      <button onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task01;