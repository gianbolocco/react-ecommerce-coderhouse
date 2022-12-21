import React from 'react'
import Header from '../components/Header';
import ItemListContainer from '../components/ItemListContainer';
import ShortCuts from '../components/Shortcuts/ShortCuts';

const Home = () => {
  return (
    <div>
        <Header/>
        <ShortCuts />
        <ItemListContainer/>
    </div>
  )
}

export default Home