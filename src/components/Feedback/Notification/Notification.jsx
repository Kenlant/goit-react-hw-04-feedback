import propTypes from './NotificationPropTypes';
import styles from './Notification.module.css';

export default function Notification({ message }) {
  return <span className={styles.message}>{message}</span>;
}

Notification.propTypes = propTypes;
