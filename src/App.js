
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import PreHeader from './component/PreHeadre/preheader';
import Header from './component/Headre/Header';
import Hero from './component/Hero/Hero';
import CountNumber from './component/Count/CountNumber';
import Course from './component/Course/Course';
import CompanySection from './component/CompanySection/CompanySection';
function App() {
  return (
    <>
    {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<PreHeader />} /> */}
        {/* <Route path="/" element={<Header />} /> */}
        <PreHeader/>
        <Header/>
        <Hero/>
        <CountNumber/>
        <Course/>
        <CompanySection/>

        
      {/* </Routes> */}
    {/* </BrowserRouter> */}
  </>
  );
}

export default App;
