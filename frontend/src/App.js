import React from 'react';
import { AboutUs } from './components/AboutUs/List/List';
import { Contacts } from './components/Contacts/Contacts';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { Footer } from './components/Footer/Footer';
import { MainScreen } from './components/MainScreen/MainScreen';
import { PriceList } from './components/PriceList/PriceList';
// import { Slider } from './components/PromoSlider/Slider';
import './styles/App.scss';

function App() {
  return (
    <div>
      <div className='container'>
        <MainScreen />
        <AboutUs />
        {/* <Slider /> */}
        <PriceList />
        <FeedbackForm />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
