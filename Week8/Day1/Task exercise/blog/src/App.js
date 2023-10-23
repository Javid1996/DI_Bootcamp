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


// import Actor from './actor.js';

// const App = () => {

// const actorsList = [
//     {
//       id : 1,
//       firstName: "actor1",
//       lastName: "last-name1",
//       url: "someurlfsdflsdkfnlsdnfl"
//     },
//     {
//       id : 2,
//       firstName: "actor2",
//       lastName: "last-name2",
//       url: "someurlfsdflsdkfnlsdnflasdfhajshlhasdhla;sdSA"
//     },
//     {
//       id : 3,
//       firstName: "actor3",
//       lastName: "last-name3",
//       url: "3rdurlofactor"
//     },
    
//   ]

//   return (
//     <div>
//       <h1>In the App.js</h1>
//       <Car cars={listCars} />

//     </div>
//   )
// }

// export default App;


import Actor from "./Actor";

const actors = [
  {
    firstName: "Angelina",
    lastName: "Jolie",
  },
  {
    firstName: "Brad",
    lastName: "Pit",
  },
  {
    firstName: "Margot",
    lastName: "Robbie",
  },
];

function App() {
  return (
    <div >
      <Actor actorsList={actors} />
    </div>)
}

export default App;








