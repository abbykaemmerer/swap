import React from 'react';

function RSVPFormScreen(props) {
  
  return (
  <div className='rsvp-section'>
    {/* <p id="error">{props.errorMessage}</p> */}

    <form
    className="form">    
    <header>
        <h1>Ready to swap?</h1>
      </header>
      <h4>Let us know you're coming.</h4>
      <div className='form-item'>
        <label>
          <span className="form-labels">Name:</span>
          <input
          type="text" name="name"
          className="textfield"
          value={props.input}
          onChange={props.handleNameChange}/>
        </label>
      </div>
      <div className='form-item'>
        <label>
          <span className="form-labels" id='contribution-label'>How many items will you be swapping?</span>
          <select 
          className="textfield"
          id='select'
          onChange={props.handleContributionChange}>
              <option value="" defaultValue>Select</option>
              <option value="vibes">Just comin for snacks & vibez</option>
              <option value="1-3 items">1-3</option>
              <option value="3-5 items">3-5</option>
          </select>
        </label>
      </div>
      <button 
        className="main-btn"
        onClick={props.handleNext}>Next
      </button>
    </form>
  </div>

    );
}

export default RSVPFormScreen;

