import React from 'react';
import {Header, ContactInfo, MainSection, SideSection, Footer} from '../../Components';
import './App.scss';
import data from '../../Assets/data';

function App() {
  return (
    <div className="App">
      <div className="left-section">
        <Header {...data.Header}/>
        <MainSection sections={data.MainSections}/>
      </div> 
      <div className="right-section">
        <ContactInfo {...data.ContactInfo}/>
        <SideSection sections={data.SideSections}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
