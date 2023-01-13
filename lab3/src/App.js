import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import PhotoApp from "./PhotoApp";
import PhotoMain from "./PhotoMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" exact element={<PhotoApp/>}/>
        <Route path="/" exact element={<PhotoApp/>}/>
        <Route path="/home" exact element={<PhotoApp/>}/>
        
        <Route path="image/:id" element={<PhotoMain/>}/>
      </Routes>
    </Router>
  );
}

export default App;