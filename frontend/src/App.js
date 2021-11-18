import React from 'react';
import { AboutUs } from './components/AboutUs/List/List';
import { Contacts } from './components/Contacts/Contacts';
import { MainScreen } from './components/MainScreen/MainScreen';
import { PriceList } from './components/PriceList/PriceList';
// import { Slider } from './components/PromoSlider/Slider';
import './styles/App.scss';

function App() {
  return (
    <div className='container'>
      <MainScreen />
      <AboutUs />
      {/* <Slider /> */}
      <PriceList />
      <Contacts />
    </div>
  );
}

export default App;
