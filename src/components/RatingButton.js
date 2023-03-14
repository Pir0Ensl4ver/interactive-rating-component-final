import classes from "./RatingButton.module.css";

const RatingButton = (props) => {
  return (
    <button
      className={classes.rating_button}
      onClick={props.onClickSaveValue}
      value={props.value}
      type="button"
    >
      {props.value}
    </button>
  );
};

export default RatingButton;
