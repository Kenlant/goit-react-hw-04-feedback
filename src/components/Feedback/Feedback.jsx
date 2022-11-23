import { Component } from 'react';
import classNames from 'classnames';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import styles from './Feedback.module.css';
import Notification from './Notification/Notification';

export default class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.handleFeedbackBtnClick = this.handleFeedbackBtnClick.bind(this);
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (!total) return 0;

    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  handleFeedbackBtnClick(e) {
    this.setState(prev => ({
      [e.target.name]: prev[e.target.name] + 1,
    }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const blockClasses = classNames(styles.feedback);
    const options = [
      { name: 'good', label: 'Good' },
      { name: 'neutral', label: 'Neutral' },
      { name: 'bad', label: 'Bad' },
    ];

    return (
      <div className={blockClasses}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedbackBtnClick}
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
}
