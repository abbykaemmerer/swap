import Guest from "../Guest/guest";

const GuestListScreen = (props) => {
    return (
        <div className="guests-section">
        <div>
          <h1>Guest List</h1>
          <section className="list">
          {props.list.map((guest) => {
            return (
              <Guest
                guest={guest}
                key={guest.id}
                handleChange={props.handleChange}
                handleDelete={props.handleDelete}
          />
        );
      })}
    </section>
        </div>
      </div>
    );
};

export default GuestListScreen;