import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Popup from './components/popup/Popup'

function App() {
  const [popupIsOpened, setPopupIsOpened] = useState(false)

  const requestDemoHandler = () => {
    setPopupIsOpened(!popupIsOpened)
  }

  return (
    <div style={popupIsOpened ? { overflow: 'hidden', height: '100vh' } : {}}>
      <Header requestDemoHandler={requestDemoHandler} />
      <Main />
      <Footer requestDemoHandler={requestDemoHandler} />
      {popupIsOpened && <Popup requestDemoHandler={requestDemoHandler} />}
    </div>
  );
}

export default App;
