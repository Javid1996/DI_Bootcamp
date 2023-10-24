// import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals.js'

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div>
      <UserFavoriteAnimals animals= {user.favAnimals}/>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      {/* <>{animals}</> */}

    </div>
    )
}

export default App;
