import { ClientSideSuspense } from "@liveblocks/react";
import { LiveList } from "@liveblocks/client";
import { RoomProvider, useMutation, useStorage} from '../liveblocks.config';
import { useState } from "react";
export default function GuestListScreen () {
    return (
      <RoomProvider 
      id={"react-guest-list"} 
      initialStorage={{ guests: new LiveList() }}
      initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => <GuestList />}
      </ClientSideSuspense>
    </RoomProvider>
    );
};

function GuestList() {
  const [draft, setDraft] = useState("");
  const guests = useStorage((root) => root.guests);

  const addGuest = useMutation(({ storage }, text) => {
    storage.get("guests").push({ text })
  }, []);

  const deleteGuest = useMutation(({ storage }, index) => {
    storage.get("guests").delete(index);
  },[]);

  return (
    <div className="guests-section">
      <form>
      <div className='form-item'>
          <label>
            <span className="form-labels">Name:</span>
            <input
            type="text" name="name"
            className="textfield"
            value={draft}
            onChange={(e) => {setDraft(e.target.value)}}/>
          </label>
        </div>
      <button 
          className="main-btn"
          onClick={() => (addGuest(draft))}>ADD GUEST
        </button>
      </form>
    <div>
      <h1>Guest List</h1>
      <section className="guests">
      {guests.map((guest, index) => {
        return(
          <div key={index} className="guest_container">
            <li className="guest">
              {guest.text} is bringing
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