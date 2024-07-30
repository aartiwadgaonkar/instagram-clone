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
import { red } from '@mui/material/colors';
import { ImageList, ImageListItem, Stack } from '@mui/material';
import { getPostDataAction } from '../redux/user/createPostAction';
import { URL } from '../redux/api';
const theme = createTheme();

export default function Profile() {
    const { posts } = useSelector(state => state.post)
    const { userLogin } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];
    useEffect(() => {
        dispatch(getPostDataAction())
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                {JSON.stringify(posts)}
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Stack
                        direction={'row'}
                        spacing={{ xs: 2, sm: 2, md: 4 }}
                    >
                        <Box>
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                            <Typography>{userLogin.name}</Typography>
                        </Box>
                        <Box>
                            <Typography>10</Typography>
                            <Typography>Posts</Typography>
                        </Box>
                        <Box>
                            <Typography>10</Typography>
                            <Typography>Followers</Typography>
                        </Box>
                        <Box>
                            <Typography>10</Typography>
                            <Typography>Following</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Stack direction={'row'} spacing={2} marginY={3} >
                    <Button variant='contained' color="secondary" size='small'>Edit Profile</Button>
                    <Button variant='contained' size='small'>Share Profile</Button>
                    <Button variant='contained' size='small'>+</Button>
                </Stack>
                <ImageList marginTop={7} sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                    {posts.map((item) => (<>

                        {console.log(item)}
                        <Link to={`/showpost`}>
                            <ImageListItem >
                                {/* <img
                                src={`${URL}/${item.image}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${URL}/${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            /> */}
                                <img
                                    src={`${URL}/${item.image[0]}`}
                                    alt={item.title}
                                />
                            </ImageListItem>
                        </Link>
                    </>
                    ))}
                </ImageList>
            </Container>
        </ThemeProvider>
    );
}