import React from 'react';

class RsvpForm extends React.Component {
  
  state = {
  }

 //This func is called when you click the button
 // has been passed in from from the parent via props
  nextCicked = e => {
    e.preventDefault();
    this.props.showConfirmScreen(this.state.name, this.state.dietaryRequirements);
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
        <label>How many items do you plan to contribute?</label>
        <select 
        className="textfield"
        onChange={e => this.setState({ dietaryRequirements: e.target.value})}>
            <option value="" disabled defaultValue>Select</option>
            <option value="none">Just comin for snacks & vibez</option>
            <option value="1">1-3</option>
            <option value="2">3-5</option>
        </select>
      </div>
      <button 
        className="main-btn"
        onClick={e => this.nextCicked(e)}>Next
      </button>
    </form>
  </div>

    );
  }
  }

export default RsvpForm;