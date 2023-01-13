import {useNavigate} from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        ReactJS. Lab01. Oleksii Bubenko. IPZ-20-2.
      </h1>
  
      <ul style={{fontSize: '24px'}}>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task01")}>Task01</li>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task02")}>Task02</li>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task03")}>Task03</li>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task04")}>Task04</li>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task05")}>Task05</li>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task06")}>Task06</li>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task07")}>Task07</li>
        <li style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => navigate("/task08")}>Task08</li>
      </ul>
    </div>
  );
};

export default Main;
