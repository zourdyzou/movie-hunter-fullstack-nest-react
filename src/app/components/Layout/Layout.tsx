import { FunctionComponent } from 'react';

import Sidebar from '@/components/Layout/Sidebar';
import Navigation from '@/components/Layout/Navigation';

import styles from './Layout.module.scss';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navigation />
      <div className={styles.center}>side 2 {children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
