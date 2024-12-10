import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './component/Card';
import DropDownOnHover from "./component/DropDownOnHover";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/hover' element={<DropDownOnHover/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
