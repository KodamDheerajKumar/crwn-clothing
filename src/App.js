import React from 'react';
import './App.css';
import { Link,Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage=() =>(
    <div>
        <Link to="/">HATSPAGE</Link>
    </div>
);

const Shop=() =>(
    <div>
        <Link to="/hats">HATSPAGE</Link>
    </div>
);
    

function App() {
    return (
            <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route  path='/hats' element={<HatsPage/>} />
            <Route path='/shop' element={<Shop/>}/>
            <Route/>
            </Routes>
    )
}


export default App;
