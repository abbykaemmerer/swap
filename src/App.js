import React, { Component } from 'react';
import RsvpForm from './RSVP/rsvp';
import ConfirmScreen from './Confirm/confirm';
import './App.css';

class App extends Component {
  
state = {
  showConfirmScreen: false,
  toggleRsvps: false,
  toggleIcon: "⊕",
  rsvps: [],
  errorMessage: '',
  }


  onSubmit(name, contributions) {
    if (name === undefined || contributions === undefined) {
      console.log("error");
      this.setState({errorMessage: 'Please fill all fields'})
    } else {

    let pendingRsvp = []
    pendingRsvp.name = name;
    pendingRsvp.contributions = contributions;
    this.setState({ pendingRsvp: pendingRsvp, showConfirmScreen: true });
   }
  };


  onConfirm = () => {
    let rsvps = [...this.state.rsvps]
    let newRsvp = {}
    newRsvp.name = this.state.pendingRsvp.name;
    newRsvp.contributions = this.state.pendingRsvp.contributions;
    rsvps.push(newRsvp);
    this.setState ({ rsvps: rsvps, showConfirmScreen: false, errorMessage: '' })
  }


  toggle = (event) => {
    this.state.toggleRsvps === true ? this.setState ({toggleRsvps: false, toggleIcon: "⊕"}) : this.setState ({toggleRsvps: true, toggleIcon: "⊖"}) ;
  }
 

  render() {
  let view;
  if (this.state.showConfirmScreen === false) {
      view = <RsvpForm
      showConfirmScreen={(name, contributions) => this.onSubmit(name, contributions)}
      errorMessage={this.state.errorMessage}/>
  } else {
      view = <ConfirmScreen 
      name={this.state.pendingRsvp.name}
      contributions={this.state.pendingRsvp.contributions}
      onConfirm={this.onConfirm}
      onEdit={() => this.setState ({ showConfirmScreen: false, errorMessage: '' })}/>
  }

  let rsvps;
  if (this.state.toggleRsvps === true && this.state.rsvps.length <= 0) {
        rsvps = <div><p>No guests so far</p></div>
      } else if (this.state.toggleRsvps === true) {
        rsvps = <div> {this.state.rsvps.map((r) => { return <li>{r.name} is contributing {r.contributions}</li> })} </div>
    } else {
  }

  return (
  <div className="App">
    <div className="hero-view">
      <header>
        <h1>Let's Swap</h1>
      </header>
      <div>
        <h3>Clothes, snacks, friends.</h3>
        <h4>What more could you want?</h4>
      </div>
      <div className='info'>
        <div className='date'>
          <div>Feb 18</div>
          <div>3pm</div>
        </div>
        <div className='vr'></div>
        <div className='address'>
          1831 Sydney Street
        </div>
      </div>
      <div className='rsvp'>
        <h4>RSVP by Feb 11</h4>
        <div>    
          <div className='gif'>
            <iframe className="giphy-embed" title="gif" src="https://giphy.com/embed/13Qumr2SLqrl5e" frameBorder="0" allowFullScreen>
            </iframe>
          </div>      
        </div>
      </div>
    </div> 

    <div>
      <div className="rsvp-section">
      {view}
      </div>

      <div className="guests-section">
          <div>
            <h1 onClick={this.toggle}> Guest List {this.state.toggleIcon}</h1>
            <h4 className='guests'> {rsvps} </h4>
          </div>
      </div>
    </div>
    



    <div className='faq-section'>
      <h1>FAQs</h1>
        <div className='faq'>
          <h3>What should I contribute?</h3>
          <p>Clothing, accessories, shoes. Up to 5 clean and well maintained items that are no longer serving you but could bring someone else joy.</p>
        </div>
        <div className='faq'>
          <h3>What is the contribution process?</h3>
          <p>We will be collecting all items before the event so we can sort and display items accordingly.</p>
          <p>Please coordinate your drop off with Abby or Zoe before FEB 16.</p>
        </div>
        <div className='faq'>
          <h3>Swapping etiquette:</h3>
          <p>Be mindful of drop off deadlines</p>
          <p>Launder your contributions before drop off</p>
          <p>Take approx the same amount of items that you contributed</p>
        </div>
      </div>
    </div>
  );
 }
}

export default App;
