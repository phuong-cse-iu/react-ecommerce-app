import { auth } from '../../firebase/firebase.utils';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import FirebaseUserContext from '../../context/firebase-user';

import './header.styles.scss';

const Header = () => {
  const currentUser = useContext(FirebaseUserContext);

  console.log('Current user from header component', currentUser);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {' '}
            SIGN OUT{' '}
          </div>
        ) : (
          <Link to="/signin" className="option">
            {' '}
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
