import { Component } from 'react';
import classNames from 'classnames';
import propTypes from './StatisticsPropTypes';
import styles from './Statistics.module.css';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    const listClasses = classNames(`list`, styles['statistics-list']);
    const listItemClasses = classNames(styles[`statistics-list-item`]);

    return (
      <>
        <ul className={listClasses}>
          <li className={listItemClasses}>Good: {good}</li>
          <li className={listItemClasses}>Neutral: {neutral}</li>
          <li className={listItemClasses}>Bad: {bad}</li>
          <li className={listItemClasses}>Total: {total}</li>
          <li className={listItemClasses}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = propTypes;
