import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDataAction } from '../redux/user/createPostAction';
import { URL } from '../redux/api';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { TextField } from '@mui/material';
import { useState } from 'react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Post() {
    const [expanded, setExpanded] = React.useState(false);
    const { posts } = useSelector(state => state.post)
    const { userLogin } = useSelector(state => state.users)
    const [comment, setComment] = useState()
    const [toggle, setToggle] = useState(true)
    const dispatch = useDispatch()
    const handleComment = () => {
        setComment(!false)
    }
   
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    React.useEffect(() => {
        dispatch(getPostDataAction())
    }, [comment])

    return <>
        {
            posts.map(item => <> <Card sx={{ maxWidth: 345, marginY: 6 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src="/broken-image.jpg">

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={userLogin.userName}

                />
                <CardMedia
                    component="img"
                    height="194"
                    image={`${URL}/${item.image[0]}`}
                    alt="Paella dish"
                />

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="share" onClick={e=>setToggle(!toggle)}>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton sx={{ marginLeft: 20 }} aria-label="share">
                        <BookmarkBorderIcon />
                    </IconButton>

                </CardActions>
                {
                    toggle &&
                        <TextField placeholder='comment' ></TextField>
                      
                }

            </Card></>)
        }
    </>
}