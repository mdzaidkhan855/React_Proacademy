import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Demo React App</h1>
      {props.isAuthenticated && <button onClick={props.onLogout}>Logout</button>}
      <Navigation />
    </header>
  );
};

export default MainHeader;
