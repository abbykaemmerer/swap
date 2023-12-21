import React, { Component } from 'react';
import RsvpForm from './RSVP/rsvp';
import ConfirmScreen from './Confirm/confirm';
import './App.css';

//BASE APP COMPONENT

class App extends Component {
  
state = {
  showConfirmScreen: false,
  toggleRsvps: false,
  toggleIcon: "⊕",
  rsvps: [],
  errorMessage: '',
  }


//Saves the users entry as a pending invite,validates
  onSubmit(name, dietaryRequirements) {
    console.log(name)
    if (name === undefined || dietaryRequirements === undefined) {
      console.log("error")
      this.setState({errorMessage: 'Please fill all fields'})
    } else {

    let pendingRsvp = []
    pendingRsvp.name = name;
    pendingRsvp.dietaryRequirements = dietaryRequirements;
    this.setState({ pendingRsvp: pendingRsvp, showConfirmScreen: true });
   }
  };


//Pushes the pending invte data into the RSVP's array on confirm
  onConfirm = () => {
    let rsvps = [...this.state.rsvps]
    let newRsvp = {}
    newRsvp.name = this.state.pendingRsvp.name;
    newRsvp.dietaryRequirements = this.state.pendingRsvp.dietaryRequirements;
    rsvps.push(newRsvp);
    this.setState ({ rsvps: rsvps, showConfirmScreen: false, errorMessage: '' })
  }


//Toggles the guestslist, and swutched the icon between + & -
  toggle = (event) => {
    this.state.toggleRsvps === true ? this.setState ({toggleRsvps: false, toggleIcon: "⊕"}) : this.setState ({toggleRsvps: true, toggleIcon: "⊖"}) ;
  }
 

//RENDER
  render() {
//Conditonal rendering to show correct screen
  let view;
  if (this.state.showConfirmScreen === false) {
      view = <RsvpForm
      showConfirmScreen={(name, dietaryRequirements) => this.onSubmit(name, dietaryRequirements)}
      errorMessage={this.state.errorMessage}/>
  } else {
      view = <ConfirmScreen 
      name={this.state.pendingRsvp.name}
      dietaryRequirements={this.state.pendingRsvp.dietaryRequirements}
      onConfirm={this.onConfirm}
      onEdit={() => this.setState ({ showConfirmScreen: false, errorMessage: '' })}/>
  }

//Note: The following should really be its own component!!! Refractor
//Render and toggle the guest list conditionally
  let rsvps;
  if (this.state.toggleRsvps === true && this.state.rsvps.length <= 0) {
        rsvps = <div><p>No guests so far</p></div>
      } else if (this.state.toggleRsvps === true) {
        rsvps = <div> {this.state.rsvps.map((r) => { return <li>{r.name}, {r.dietaryRequirements}</li> })} </div>
    } else {
  //else nothing is rendered as section is not toggled
  }


//RETURN
  return (
  <div className="App">
    <div className="hero-view">
      <header>
        <h1>Let's Swap</h1>
      </header>
      <div>
        <h2>Clothes, snacks, friends.</h2>
        <h4>What more could you want?</h4>
      </div>
      <div className='info'>
        <div className='date'>
          <div>Jan 14</div>
          <div>3pm</div>
        </div>
        <div className='vr'></div>
        <div className='address'>
          1831 Sydney Street
        </div>
      </div>
      <div className='rsvp'>
        <h4>RSVP by Jan 7</h4>
        <div>    
          <div className='gif'>
            <iframe className="giphy-embed" title="gif" src="https://giphy.com/embed/13Qumr2SLqrl5e" frameBorder="0" allowFullScreen>
            </iframe>
          </div>      
        </div>
      </div>
    </div> 

    <div className="rsvp-section">
      {view}

      <div className="guests">
          <div>
            <p onClick={this.toggle}> Guest List {this.state.toggleIcon}</p>
            <p> {rsvps} </p>
          </div>
      </div>
    </div>
    



    <div className='faq-section'>
      <span>FAQs</span>
      <div>
        <span>What should I contribute?</span>
        <span>Clothing, accessories, shoes. Up to 5 clean and well maintained items that are no longer serving you but could bring someone else joy.</span>
      </div>
      <div>
        <span>What is the contribution process?</span>
        <span>Please coordinate your drop off with Abby or Zoe before JAN 12. We will be collecting all items before the event so we can sort and display items accordingly.</span>
      </div>
      <div>
        <span>Swapping etiquette:</span>
        <span>Take approx the same amount of items that you contributed</span>
        <span>Launder your contributions before drop off</span>
        <span>Be mindful of drop off deadlines</span>
      </div>
    </div>
  

    </div>
  );
 }
}

export default App;
