import { Component } from 'react';
import propTypes from './NotificationPropTypes';
import styles from './Notification.module.css';

export default class Notification extends Component {
  render() {
    const { message } = this.props;

    return <span className={styles.message}>{message}</span>;
  }
}

Notification.propTypes = propTypes;
