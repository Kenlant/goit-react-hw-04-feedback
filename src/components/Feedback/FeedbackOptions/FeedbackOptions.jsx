import classNames from 'classnames';
import propTypes from './FeedbackOptionsPropTypes';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionListClasses = classNames(`list`, styles[`feedback-option-list`]);
  const optionBtnClases = classNames(styles[`feedback-option-btn`]);

  return (
    <>
      <ul className={optionListClasses}>
        {options.map(x => (
          <li key={x.name}>
            <button
              className={optionBtnClases}
              name={x.name}
              onClick={onLeaveFeedback}
            >
              {x.label}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = propTypes;
