import React, {useContext} from 'react';
import AuthContext from '../Context/AuthContext';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  
  // return (
  //   <nav className={classes.nav}>
  //     <ul>
  //       {props.isLoggedIn && (
  //         <li>
  //           <a href="/">Users</a>
  //         </li>
  //       )}
  //       {props.isLoggedIn && (
  //         <li>
  //           <a href="/">Admin</a>
  //         </li>
  //       )}
  //       {props.isLoggedIn && (
  //         <li>
  //           <button onClick={props.onLogout}>Logout</button>
  //         </li>
  //       )}
  //     </ul>
  //   </nav>
  // );

  let context = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
