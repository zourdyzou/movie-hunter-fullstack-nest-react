import { FunctionComponent } from 'react';

import styles from './Navigation.module.scss';

const Navigation: FunctionComponent = () => {
  return (
    <div className={styles.navigationContainer}>
      <div>Logo Component</div>
      <div>Menu Container</div>
    </div>
  );
};

export default Navigation;
