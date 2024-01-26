import React, { useEffect, useState } from 'react';
import './App.css';
import InviteScreen from './Invite/invite';
import GuestListScreen from './GuestList/guest-list';
import RSVPFormScreen from './RSVPForm/rsvp';
import FAQScreen from './FAQ/faq';
import { nanoid } from "nanoid";

function App() {
const savedList = JSON.parse(localStorage.getItem('savedGuestList'));
const initialState={
  list:savedList ? savedList : []
}
const [name, setName] = useState();
const [contribution, setContribution] = useState();

const [list, setList] = useState(initialState.list);

useEffect(()=>{
  localStorage.setItem('savedGuestList', JSON.stringify(list))
})
// const handleNameChange = (e) => {
//   setName(e.target.value);
// };

// const handleContributionChange = (e) => {
//   setContribution(e.target.value);
// };


// const handleConfirm = () => {
//   const newGuest = {
//     name: name,
//     contribution: contribution,
//     id: nanoid(),
//   };
//   setName("");
//   setContribution("");
//   setList([...list, newGuest]);
// }

// const handleDelete = (guest) => {
//   let newlist = list.map((guest) => ({ ...guest }));
//   setList(newlist.filter((g) => g.id !== guest.id));
// };


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
