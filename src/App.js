import './App.css';
import './reset.css';

function App() {
  return (
    <div>
      <Search/>
    </div>
  );
}

function Search(props) {
  return(
    <div className="search-div">
      <div>
        <h1>Search a hero</h1>
        <input />
      </div>
      <button>Find</button>   
    </div>
  );
}

export default App;
