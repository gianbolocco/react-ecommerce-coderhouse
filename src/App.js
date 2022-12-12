import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

//components
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/product/:id' element={<ItemDetailContainer/>} />
          <Route path='/brand/:brand' element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
