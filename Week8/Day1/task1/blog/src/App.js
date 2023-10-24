// import logo from './logo.svg';
import './App.css';
function App() {
  const myElement = <h1>I Love JSX!</h1>;

  const sum = 5 + 5;
  return (
    <>
    <p>Hello World</p>
    <div> {myElement} </div>
    <p>React is {sum} times better with JSX </p>
    
    </>

  );
}

export default App;
