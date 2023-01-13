import {useNavigate} from "react-router-dom";
import Counter from "./Counter";
import {Button} from "antd";

const Task01 = () => {
  const navigate = useNavigate();
  
  const counters = [
    {id: 1, init: 6, min: -5, max: 10},
    {id: 2, init: 5},
    {id: 3}
  ];
  
  return (
    <div>
      <h3>Task01</h3>
  
      {counters.map(c =>
        <Counter id={c.id} init={c.init} max={c.max} min={c.min}/>
      )}
      
      <Button onClick={() => navigate('/')}>To home</Button>
    </div>
  );
};

export default Task01;