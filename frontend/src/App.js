import React from 'react';
import { AboutUs } from './components/AboutUs/List/List';
import { Contacts } from './components/Contacts/Contacts';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { Footer } from './components/Footer/Footer';
import { MainScreen } from './components/MainScreen/MainScreen';
import { PriceList } from './components/PriceList/PriceList';
import { Slider as CommentsSlider } from './components/Slider/Comments/Slider';
import { Slider as DoctorsSlider } from './components/Slider/Doctors/Slider';
import { Slider as PromoSlider } from './components/Slider/Promo/Slider';
import './styles/App.scss';

function App() {
  return (
    <div>
      <div className='container'>
        <MainScreen />
        <AboutUs />
        <PromoSlider id='promo' />
        <PriceList id='pricelist'/>
        <FeedbackForm />
        <DoctorsSlider id='doctors' />
        <CommentsSlider id='comments'/>
        <Contacts id='contacts'/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
