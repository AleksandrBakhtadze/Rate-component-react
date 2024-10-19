import { useState } from "react";
import "./Container.css";
import Heading from "./Heading";
import Star from "./Star";
import ContainerText from "./ContainerText";
import Rbuttons from "./RateButtons.jsx";
import Submit from "./Submit.jsx";
import Thanks from "./SecondContainer.jsx";

const Container = () => {

  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitClick = () => {
    if (selectedRating !== null) {
      setSubmitted(true); 
    } else {
      alert("Please select a rating before submitting.");
    }
  };

  return (
    <div>
      {submitted ? ( 
        <Thanks selectedRating={selectedRating} />
      ) : (
        <div className="container">
          <Star />
          <Heading />
          <ContainerText />
          <Rbuttons onSelect={handleRatingSelect} />
          <Submit onSubmit={handleSubmitClick} />
        </div>
      )}
    </div>
  );
};

export default Container;
