import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAction } from '../redux/user/userAction';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { resetUserError } from '../redux/user/userSlice';

const theme = createTheme();

export default function Login() {
  const [userLoginData, setUserLoginData] = useState({
    email: "aarti@gmail.com",
    userName: "aarti_123",
    password: "123"
  })
  const dispatch = useDispatch()
  const { userLogin, error } = useSelector(state => state.users)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const navigate = useNavigate()

  useEffect(() => {
    if (userLogin) {
      toast.success("login successfuly")
      navigate("/post")
    }
    if (error) {
      toast.error(error)
      dispatch(resetUserError())
    }
   
  }, [error, userLogin])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <InstagramIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Instagram
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>



            <TextField margin="normal"
              required
              fullWidth
              name="email"
              label="Email,Mobile No or Password"
              value={userLoginData.email || userLoginData.userName}
              onChange={e => setUserLoginData({ ...userLoginData, email: e.target.value, userName: e.target.value })}
              type="text"
              id="email"
              autoComplete="email"
            />


            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={userLoginData.password}
              onChange={e => setUserLoginData({ ...userLoginData, password: e.target.value })}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={e => dispatch(userLoginAction(userLoginData))}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to='/' >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/register' >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
}