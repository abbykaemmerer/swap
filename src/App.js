import React from 'react';
import './App.css';
import InviteScreen from './Invite/invite';
import GuestListScreen from './GuestList/guest-list';
import FAQScreen from './FAQ/faq';

function App() {


  return (
  <div className="App">
    <InviteScreen></InviteScreen>
    <GuestListScreen
    ></GuestListScreen>
    <FAQScreen></FAQScreen>
  </div>
  );
}

export default App;
