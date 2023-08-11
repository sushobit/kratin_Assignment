import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Home'; 
import AboutUs from './components/About';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import LoginPage from './components/LoginPage';
import serviceList from './components/ServicesList';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path='/' Component={LoginPage}/>
      <Route exact path='/home' Component={HomePage}/>
      <Route exact path='/about' Component={AboutUs}/>
      <Route exact path='/doctors' Component={Doctors}/>
      <Route exact path='/appointment' Component={Appointment}/>
      <Route exact path='/login' Component={LoginPage}/>
      <Route exact path='/service' Component={serviceList}/>
      <Route exact path='/contact' Component={Contact}/>
      </Routes>  
      <Footer />
  </BrowserRouter>     
)


export default App;
