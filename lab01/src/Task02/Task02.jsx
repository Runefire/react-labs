import {useNavigate} from "react-router-dom";

const Cell = ({name, isBold}) => {
  return (
    isBold
      ? <td style={{width: '100px', height: '30px'}}><b>{name}</b></td>
      : <td style={{width: '100px', height: '30px'}}>{name}</td>
  );
};

const Task02 = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h2>Task02</h2>
      
      <table style={{borderCollapse: 'collapse', marginTop: '10px'}} border="2">
        <tr>
          <Cell name={"FirstName"} isBold={true}/>
          <Cell name={"Andrew"}/>
        </tr>
  
        <tr>
          <Cell name={"LastName"} isBold={true}/>
          <Cell name={"Gold"}/>
        </tr>
  
        <tr>
          <Cell name={"Occupation"} isBold={true}/>
          <Cell name={"Java Developer"}/>
        </tr>
      </table>
      
      <button style={{marginTop: '10px'}} onClick={() => navigate('/')}>To home</button>
    </div>
  );
};

export default Task02;