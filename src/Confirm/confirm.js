
const ConfirmScreen = ( props ) => {
    return (
        <div>
            <h1>Confirm RSVP deets</h1>
            <p>Name: {props.name}</p>
            <p>Contributing: {props.contributions}</p>

            <button
                className="secondary-btn"
                onClick={props.onEdit}
            >x
            </button>
            <button
                className="man-btn"
                onClick={props.onConfirm}
            >Confirm
            </button>
        </div>
    );
};

export default ConfirmScreen;