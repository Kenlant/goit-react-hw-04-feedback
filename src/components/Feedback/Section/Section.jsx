import classNames from 'classnames';
import propTypes from './SectionPropTypes';
import styles from './Section.module.css';

export default function Section({ title, children }) {
  const titleClassNames = classNames(styles[`title`]);

  return (
    <section>
      <h1 className={titleClassNames}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = propTypes;
