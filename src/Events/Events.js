import React from 'react';
import Navbar from './Components/Navbar';
import Eventcard from './Components/event-card';
import Footer from './Components/Footer';



function Events() {
  return (
    <div className="App">
     <Navbar/>
     <Eventcard/>
     <Footer/>
    </div>
    
  );
}

export default Events;
