import "./RateButtons.css";

const Rbuttons = ({ onSelect }) => {
    return (
        <div className="Rbuttons">
            {[1, 2, 3, 4, 5].map((num) => (
                <div
                    key={num}
                    className="rate"
                    onClick={() => onSelect(num)}
                >
                    {num}
                </div>
            ))}
        </div>
    );
};

export default Rbuttons;
