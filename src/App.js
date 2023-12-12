// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>welcome  Sundar</p>
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

import Header from './Header';
import Header2 from './Header2';

function App() {

  function handleNameChange(){
    const names = ['Sundar', 'Riayn', 'Arthik', 'Rio'];
    const int = Math.floor(Math.random()*names.length);

    return names[int]
  }


  return (
    <div className="App">
      <div>
        <p>Hi how are {handleNameChange()}</p>
        <Header/>
        <Header2/>
      </div>
    </div>
  );
}

export default App;
