import {useState} from "react";
import {Button, Input, Space} from "antd";

const Game = () => {
  const [isActive, setIsActive] = useState(false);
  const [random, setRandom] = useState(null);
  const [info, setInfo] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isWin, setIsWin] = useState(null);
  const [message, setMessage] = useState('');
  const [currentNumber, setCurrentNumber] = useState(null);
  
  const getRandom = () => {
    const min = 1;
    const max = 1000;
    
    return  Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  console.log('Generated number:', random);
  
  const gameHandler = () => {
    setIsActive(true);
    setAttempts(0);
    setInfo([]);
    setMessage('');
    setIsWin(null);
    
    setRandom( getRandom() );
  }
  
  const checkHandler = () => {
    try {
      if (currentNumber === null) {
        alert('Error! Entered number is incorrect!');
        return;
      }
  
      if ( info.filter(i => i.number === currentNumber).length !== 0 ) {
        alert('Error! You have already entered this number!');
        return;
      }
      
      const maxAttempts = 10;
      setAttempts(prev => prev + 1);
      
      if (attempts === maxAttempts - 1) {
        setIsWin(false);
        setMessage(`Game Over! Right number: ${random}`);
        setIsActive(false);
        setCurrentNumber(null);
        return;
      }
      
      if (parseInt(currentNumber) < random) {
        setInfo([...info, {number: currentNumber, isMore: true}]);
      } else if (parseInt(currentNumber) > random) {
        setInfo([...info, {number: currentNumber, isMore: false}]);
      } else {
        setIsWin(true);
        setMessage("Good Job!");
        setIsActive(false);
        setCurrentNumber(null);
      }
    } catch (e) {
      alert('Error! Entered number is incorrect!');
    }
  }
  
  return (
    <div style={{width: "600px", border: "1px solid black", padding: "10px"}}>
      <h2>Guess a number</h2>
      
      <Space>
        {isActive
          ? <Button disabled>New game</Button>
          : <Button onClick={gameHandler}>New game</Button>
        }
        
        <Input value={currentNumber} onChange={(e) => setCurrentNumber(e.target.value)} min={1} max={1000} type={"number"}/>
        
        {isActive
          ? <Button onClick={checkHandler} type={"primary"}>Check</Button>
          : <Button disabled type={"primary"}>Check</Button>
        }
      </Space>
      
      <div style={{marginTop: '25px'}}>
        <h2>Information:</h2>
        <ul style={{background: 'lightyellow', width: '500px', listStyle: 'none'}}>
          {info && info.map(i =>
            <li key={i.number}>N {i.isMore? '>' : '<'} {i.number}</li>
          )}
        </ul>
        
        <h2>Attempts: {attempts}</h2>
        <h2>Result: {isWin
          ? <span  style={{color: 'green'}}>{message}</span>
          : <span  style={{color: 'red'}}>{message}</span>}
        </h2>
      </div>
    </div>
  );
};

export default Game;
