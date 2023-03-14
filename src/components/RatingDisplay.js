import { useState } from "react";
import RatingButton from "./RatingButton";
import { ReactComponent as ThankYou } from "../UI/images/illustration-thank-you.svg";
import { ReactComponent as StarIcon } from "../UI/images/icon-star.svg";

import classes from "./RatingDisplay.module.css";

const RatingDisplay = (props) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const ratings = [1, 2, 3, 4, 5];

  const onClickButtonHandler = (event) => {
    event.preventDefault();
    setSelectedValue(event.target.value);
    setSubmitDisabled(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsButtonClicked(true);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      {!isButtonClicked ? (
        <div className={classes.form_div}>
          <div className={classes.oval_icon_container}>
            <StarIcon />
          </div>
          <h1 className={classes.form_question_h1}> How did we do?</h1>
          <p className={classes.form_question_paragraph}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className={classes.rating_button_container}>
            {ratings.map((rating) => {
              return (
                <RatingButton
                  className={classes.rating_button}
                  value={rating}
                  onClickSaveValue={onClickButtonHandler}
                >
                  {rating}
                </RatingButton>
              );
            })}
          </div>
          <div>
            <button
              className={classes.submit_button}
              type="submit"
              disabled={isSubmitDisabled}
            >
              SUBMIT
            </button>
          </div>
        </div>
      ) : (
        <div>
          <ThankYou className={classes.thank_you_image} />
          <p className={classes.rate_info}>
            You selected {selectedValue} out of {ratings.length}
          </p>
          <h1 className={classes.form_ty_h1}>Thank you!</h1>
          <p className={classes.thank_you_info}>
            "We appreciate you taking the time to give a rating. If you ever
            need more support, don’t hesitate to get in touch!"
          </p>
        </div>
      )}
    </form>
  );
};

export default RatingDisplay;
