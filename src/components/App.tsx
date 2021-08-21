import React from 'react';
import { Header } from './Header/Header';
import { MainBlock } from './MainBlock/MainBlock';
import VirtualTour from './VirtualTour/VirtualTour';
import { ExplorePicture } from './ExplorePicture/ExplorePicture';
import { VideoJourney } from './VideoJourney/VideoJourney';
import { ArtGallery } from './ArtGallery/ArtGallery';
import { Background } from './Background/Background';
import { BuyTickets } from './BuyTickets/BuyTickets';
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <MainBlock/>
        <VirtualTour/>
        <ExplorePicture/>
        <VideoJourney/>
        <ArtGallery/>
        <Background/>
        <BuyTickets/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
