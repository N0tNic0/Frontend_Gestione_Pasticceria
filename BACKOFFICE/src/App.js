import logo from './logo.svg';
import './App.css';

import {Dashboard} from "./Dashboard";
import {Dolce} from "./Dolce";
import {Ingrediente} from "./Ingrediente";
import {Navigation} from "./Navigation";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <h3 className='m-3 d-flex justify-content-center'>
          BACKOFFICE PASTICCERIA
        </h3>

        <Navigation />

        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/ingrediente' element={<Ingrediente/>}/>
          <Route path='/dolce' element={<Dolce/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
