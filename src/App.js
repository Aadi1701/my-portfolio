import React from 'react';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/projects/index';
import Contacts from './components/contacts/index';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        
        <Route index element={<Home/>}></Route>
        <Route path='/skill' element={<Skills/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
