import { FunctionComponent } from 'react';

import styles from './Sidebar.module.scss';

const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div>Search Component</div>
      <div>Movies Container</div>
    </div>
  );
};

export default Sidebar;
