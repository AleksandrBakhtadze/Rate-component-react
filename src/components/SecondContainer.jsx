import "./SecondContainer.css";
import Thanks from "../assets/Thanks.svg";

const Ptanks = ({ selectedRating }) => {
    return (
        <div className="cont2">
            <img src={Thanks} className="Thanks" />
            <div className="ThanksTXT">
                <p className="Retings">You selected {selectedRating} out of 5</p>
                <h2>Thank you!</h2>
                <p className="ThanksTXT2">
                    We appreciate you taking the time to give a rating. If you ever need
                    more support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
};

export default Ptanks;