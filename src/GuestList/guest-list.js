import { ClientSideSuspense } from "@liveblocks/react";
import { LiveList, LiveObject } from "@liveblocks/client";
import { RoomProvider, useMutation, useStorage} from '../liveblocks.config';
import { useState } from "react";
import { useForm } from '@formspree/react';

export default function GuestListScreen () {
    return (
      <RoomProvider 
      id={"react-guest-list"} 
      initialStorage={{ guests: new LiveList()}}
      initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => <GuestList />}
      </ClientSideSuspense>
    </RoomProvider>
    );
};

function GuestList() {
  const [state, handleSubmit] = useForm("mqkregze");
  const [name, setName] = useState("");
  const guests = useStorage((root) => root.guests);

  const deleteGuest = useMutation(({ storage }, index) => {
    storage.get("guests").delete(index);
  },[]);
  const deleteAll = useMutation(({ storage }, guests) => {
    storage.get("guests").clear()
  },[]);
  const addGuest = useMutation(({ storage }, name) => {
    storage.get("guests").push(new LiveObject({ name }));
  }, []);

  return (
  <div>
    <div className="rsvp-section">
      <header><h1>Ready to swap?</h1></header>
      <h4>Let us know you're coming.</h4>
      <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label>
                <span className="form-labels">Name:</span>
                <input
                type="text" name="name"
                className="textfield"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </label>
          </div>
          <div className="form-item">
            <label>
                <span className="form-labels" id='contribution-label'>How many items will you be swapping?</span>
                <select 
                type="select"
                name="contribution"
                className="textfield"
                id='select'
                >
                    <option value="" defaultValue>Select</option>
                    <option value="vibes">Just comin for snacks & vibez</option>
                    <option value="1-3 items">1-3</option>
                    <option value="3-5 items">3-5</option>
                </select>
            </label>
          </div>
        <button 
            type="submit"
            className="main-btn"
            onClick={(e) => {
              addGuest(name);
            }}>ADD GUEST
        </button>
      </form>
    </div>
    <div className="guests-section">
      <h1>Guest List</h1>
      <section className="guests">
      {guests.map((guest, index) => {
        return(
          <div key={index} className="guest_container">
            <li className="guest">
              {guest.name}
              </li>
            <button className="remove-guest-btn"
              onClick={() => deleteGuest(index)}>
              ✕
            </button>
          </div>
        );
      })}
      </section>
    </div>
  </div>

  )
}