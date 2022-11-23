import { Component } from 'react';
import classNames from 'classnames';
import propTypes from './SectionPropTypes';
import styles from './Section.module.css';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    const titleClassNames = classNames(styles[`title`]);

    return (
      <section>
        <h1 className={titleClassNames}>{title}</h1>
        {children}
      </section>
    );
  }
}

Section.propTypes = propTypes;
