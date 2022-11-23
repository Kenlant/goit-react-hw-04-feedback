import { useState, useCallback, useRef } from 'react';
import classNames from 'classnames';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import styles from './Feedback.module.css';
import Notification from './Notification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const positivePercentage = (total && Math.round((good / total) * 100)) || 0;
  const blockClasses = classNames(styles.feedback);
  const options = [
    { name: `good`, label: `Good` },
    { name: `neutral`, label: `Neutral` },
    { name: `bad`, label: `Bad` },
  ];
  const setFunctionsDictionary = useRef({
    good: setGood,
    bad: setBad,
    neutral: setNeutral,
  });

  const handleFeedbackBtnClick = useCallback(e => {
    const setFunction = setFunctionsDictionary.current[e.target.name];
    if (!setFunction) return;

    setFunction(prev => prev + 1);
  }, []);

  return (
    <div className={blockClasses}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedbackBtnClick}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
