// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {useState} from 'react';
import Tweet from './tweet';
import './App.css';

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  const [users, setUsers] = useState([
    { name: 'Milos', message: 'Milos1'},
    { name: 'Gidra', message: 'Gidra1'}
  ]);

  return(
    <div className="tweet">
    <h2 className={isRed ? 'red' : ''}>App</h2>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>,
        <Tweet name={user.name} message={user.message} />
      ))}
       
      
    </div>
  );
}
export default App;