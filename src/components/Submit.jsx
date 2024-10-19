import "./Submit.css";

const Sbutton = ({ onSubmit }) => {
    return (
        <button className="Sbutton" onClick={onSubmit}>SUBMIT</button>
    );
};

export default Sbutton;