import React from 'react';
import Events  from './Events/Events.js';
import Projects from './Projects/Projects';
import MemberPage from './Members/MemberPage';

function App() {
  return (
    <div className="App">
     <Events/>
     <Projects/>
     <MemberPage/>
    </div>
  );
}

export default App;
