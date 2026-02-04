import React from 'react'

function App() {
  const userName = 'Alex';
  const appTitle = 'My First React UI Project';

  
  return (
    <div className="App">
     
      <h1>Hello, {userName}! Welcome to {appTitle}</h1>
      
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="A description of the image" 
        className="app-logo" 
      />

      
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>

      
      
    </div>
  );
}

export default App