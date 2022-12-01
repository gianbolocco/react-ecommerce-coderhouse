import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App bg-bg p-5">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
