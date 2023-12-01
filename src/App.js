import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Transaction from './Transaction/Transaction';
import Data from './Data/Data';
import Navigation from "./Component/Navigation";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/transaction" element={<Transaction/>} />
        <Route path="/data" element={<Data/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
