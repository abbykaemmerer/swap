import React from 'react';

class RsvpForm extends React.Component {
  
  state = {
  }

  nextClicked = e => {
    e.preventDefault();
    this.props.showConfirmScreen(this.state.name, this.state.contributions);
  }

  render() {

  return (
  <div>
    <p id="error">{this.props.errorMessage}</p>

    <form
    className="form">    
    <header>
        <h1>Ready to swap?</h1>
      </header>
      <h4>Let us know you're coming.</h4>
      <div className='form-item'>
        <label>Name:</label>
        <input
        type="text" name="name"
        className="textfield"
        onChange={e => this.setState({ name: e.target.value})}/>
      </div>
      <div className='form-item'>
        <label>How many items do you plan to contribute?
        <select 
        className="textfield"
        id='select'
        onChange={e => this.setState({ contributions: e.target.value})}>
            <option value="" defaultValue>Select</option>
            <option value="Vibes">Just comin for snacks & vibez</option>
            <option value="1-3 items">1-3</option>
            <option value="3-5 items">3-5</option>
        </select>
        </label>
      </div>
      <button 
        className="main-btn"
        onClick={e => this.nextClicked(e)}>Next
      </button>
    </form>
  </div>

    );
  }
  }

export default RsvpForm;