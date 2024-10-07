import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/authSlice';
import { HeaderContainer, LogoutButton } from './styles';
import logo from '../../assets/eldar-logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <img src={logo} alt="eldar" style={{ width: '100px', height: 'auto' }} />
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
