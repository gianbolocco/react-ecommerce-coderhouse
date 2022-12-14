import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
//context
import {DarkModeProvider} from './context/DarkModeContext'

//components
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './pages/Checkout'
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DarkModeProvider>

          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer/> } />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/brand/:brand' element={<ItemListContainer/>} />
            <Route path='/nosotros' element={<AboutUs/>} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

        </DarkModeProvider>
      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
