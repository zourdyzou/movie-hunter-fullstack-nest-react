import { FunctionComponent } from 'react';

import styles from './Layout.module.scss';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div>side 1</div>
      <div className={styles.center}>side 2 {children}</div>
      <div>side 1</div>
    </div>
  );
};

export default Layout;
