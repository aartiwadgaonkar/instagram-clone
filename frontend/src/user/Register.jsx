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
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { userRegisterAction } from '../redux/user/userAction';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { removeUserRegister, resetUserError } from '../redux/user/userSlice';
const theme = createTheme();

export default function Register() {
  const { error, register } = useSelector(state => state.users)
  const [userData, setUserData] = useState({
    name: "shivani",
    userName: "shivani01",
    mobileNo: "8894324324",
    password: "123",
    email: "shivani@gmail.com"
  })
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handleRegister = () => {
    dispatch(userRegisterAction(userData))

  }

  // useEffect(() => {
  //   if (register) {
  //     toast.success("register successfuly")
  //     if (register && register.result.token) {
  //       navigate("/home")
  //     }
  //     // dispatch(removeUserRegister())
  //     // toast(error);
  //   }

  //   if (error) {
  //     toast.error(error)
  //     dispatch(resetUserError())
  //   }

  // }, [error, register])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
          <Typography component="h1" variant="h4">
            Instagram
          </Typography>
          <Typography component="h6" variant="h6" sx={{ m: 3, alignItems: 'center' }}>
            Sign up to see photos and videos from your friends.
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  value={userData.name}
                  onChange={e => setUserData({ ...userData, name: e.target.value })}
                  id="fullName"
                  label="Full Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  value={userData.mobileNo}
                  onChange={e => setUserData({ ...userData, mobileNo: e.target.value })}
                  id="mobileNo"
                  label="Mobile no "
                  name="mobileNo"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={userData.email}
                  onChange={e => setUserData({ ...userData, email: e.target.value })}
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  value={userData.userName}
                  onChange={e => setUserData({ ...userData, userName: e.target.value })}
                  label="UserName"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={userData.password}
                  onChange={e => setUserData({ ...userData, password: e.target.value })}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/' variant="body2">
                  Already have an account? login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}