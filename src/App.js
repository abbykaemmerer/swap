import React from 'react';
import './App.css';
import InviteScreen from './Invite/invite';
import GuestListScreen from './GuestList/guest-list';
import FAQScreen from './FAQ/faq';
import InfoScreen from './Info/info';

function App() {


  return (
  <div className="App">
    <InviteScreen></InviteScreen>
    <InfoScreen></InfoScreen>
    <GuestListScreen
    ></GuestListScreen>
    <FAQScreen></FAQScreen>
  </div>
  );
}

export default App;
