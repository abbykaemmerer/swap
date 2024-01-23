import React, { useEffect, useState } from 'react';
import ConfirmScreen from './Confirm/confirm';
import './App.css';
import InviteScreen from './Invite/invite';
import GuestListScreen from './GuestList/guest-list';
import RSVPFormScreen from './RSVPForm/rsvp';
import FAQScreen from './FAQ/faq';
import { nanoid } from "nanoid";

function App() {

//  const onConfirm = () => {
//     let rsvps = [...state.rsvps]
//     let newRsvp = {}
//     newRsvp.name = state.pendingRsvp.name;
//     newRsvp.contributions = state.pendingRsvp.contributions;
//     rsvps.push(newRsvp);
//     this.setState ({ 
//       rsvps: rsvps, 
//       // showConfirmScreen: false, 
//       errorMessage: '' 
//     })
//   }
 
// const onSubmit = (name, contributions) => {
//   if(name === undefined || contributions === undefined) {
//     console.log('error');
//   } else {
//     let pendingRsvp = []
//       pendingRsvp.name = name;
//       pendingRsvp.contributions = contributions;
//       this.setState({
//         pendingRsvp: pendingRsvp, 
//         // showConfirmScreen: true
//       });
//     }
// } 
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
const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleContributionChange = (e) => {
  setContribution(e.target.value);
};

const handleNext = (e) => {
  e.preventDefault();
  if (name) {
    const newGuest = {
      name: name,
      contribution: contribution,
      id: nanoid(),
    };
    setList([...list, newGuest]);
    setName("");
    setContribution([]);
  } else {
    alert("Please enter guest name");
  }
};

const handleDelete = (guest) => {
  let newlist = list.map((guest) => ({ ...guest }));
  setList(newlist.filter((g) => g.id !== guest.id));
};


  // let view;
  // if (this.state.showConfirmScreen === false) {
  //     view = 
  //     <RSVPFormScreen
  //       input={input}
  //       handleChange={handleChange}
  //       handleNext={handleNext}
  //       showConfirmScreen={(name, contributions) => onSubmit(name, contributions)}
  //       errorMessage={state.errorMessage}/>
  // } else {
  //     view = 
  //     <ConfirmScreen 
  //       name={state.pendingRsvp.name}
  //       contributions={state.pendingRsvp.contributions}
  //       onConfirm={onConfirm}
  //       />
  // }

  // let rsvps;
  // if (state.rsvps.length <= 0) {
  //       rsvps = <div><p>No guests so far</p></div>
  //     } else {
  //       rsvps = <div> {state.rsvps.map((r) => { return <li>{r.name} is contributing {r.contributions}</li> })} </div>
  //   }

  return (
  <div className="App">
    <InviteScreen></InviteScreen>
    <RSVPFormScreen
      input={name}
      select={contribution}
      handleNameChange={handleNameChange}
      handleContributionChange={handleContributionChange}
      handleNext={handleNext}
    ></RSVPFormScreen>
    <GuestListScreen
      list={list}
      handleNameChange={handleNameChange}
      handleContributionChange={handleContributionChange}
      handleDelete={handleDelete}
    ></GuestListScreen>
    <FAQScreen></FAQScreen>
  </div>
  );
}

export default App;
