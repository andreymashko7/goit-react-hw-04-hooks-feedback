import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const feedbackNames = Object.keys(options);
  return (
    <ul className="btnList">
      {feedbackNames.map((option) => (
        <li key={option}>
          <button onClick={onLeaveFeedback} type="button" value={option}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
