import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user, isForm } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = (event) => {
    props.logoutRequest({});
  };

  const styles = {
    formHeader: {
      backgroundColor: '#21c08b',
    },
  };
  return (
    <header className='header' style={isForm ? styles.formHeader : {}}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='User Icon' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <li><a href='/'>Cuenta</a></li> :
              null
          }

          {
            hasUser ? (
              <li>
                <a href='#logout' onClick={handleLogout}>
                  Cerrar Sesión
                </a>
              </li>
            ) : (
              <li>
                <Link to='/login'>
                  Iniciar Sesión
                </Link>
              </li>
            )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
