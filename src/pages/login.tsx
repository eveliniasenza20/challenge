import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, storeData } from '../redux/authSlice';
import logo from '../assets/eldar-logo.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async () => {
    setError('');

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError('Both fields are required');
      return;
    }

    if (!validateEmail(trimmedUsername)) {
      setError('Invalid email format');
      return;
    }

    if (trimmedPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      let userData;

      if (
        trimmedUsername === 'admin@gmail.com' &&
        trimmedPassword === 'password'
      ) {
        userData = { id: '1', name: trimmedUsername, role: 'admin' };
      } else if (
        trimmedUsername === 'user@gmail.com' &&
        trimmedPassword === 'password'
      ) {
        userData = { id: '2', name: trimmedUsername, role: 'user' };
      } else {
        throw new Error('Invalid data');
      }

      dispatch(login(userData));
      dispatch(
        storeData({ username: trimmedUsername, password: trimmedPassword })
      );

      navigate('/');
    } catch (error) {
      setError('Error trying to login');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <Grid container sx={{ gap: 4, justifyContent: 'center', width: '300px' }}>
        <Grid item>
          <img
            src={logo}
            alt="eldar"
            style={{ width: '100px', height: 'auto' }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginTop: '1rem', width: '100%' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginTop: '1rem', width: '100%' }}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{
              backgroundColor: '#007bff',
              color: '#fff',
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
