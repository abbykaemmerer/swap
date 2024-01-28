const InviteScreen = ( ) => {
    return (
        <div className="invite-screen">
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
            1829 Sydney Street
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
    );
};

export default InviteScreen;