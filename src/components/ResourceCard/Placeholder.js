// @flow

import React from 'react';
import cx from 'classnames';
import styles from './styles.less';

const Placeholder = ({ className, appearance }: { className?: string, appearance: string }) => (
  <div className={cx(styles.root, className, styles[appearance])}>
    <div className={cx(styles.image, styles.placeholder)} />
    <div className={styles.textContainer}>
      <div className={cx(styles.title, styles.placeholder)}>Loading...</div>
      <div className={cx(styles.subTitle, styles.placeholder)}>Quaagan are working...</div>
    </div>
  </div>
);

export default Placeholder;
