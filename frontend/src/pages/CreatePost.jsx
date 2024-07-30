import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { createPostAction } from '../redux/user/createPostAction';
import { useDispatch } from "react-redux"
export default function CreatePost() {
    const [image, setImage] = useState();
    const dispatch = useDispatch()
    const [postData, setPostData] = useState({
        title: "kk",
        caption: "kk"
    })
    const handleChange = (e) => {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
        setPostData({ ...postData, image: e.target.files })
    }
    const handleAddPost = () => {
        const fd = new FormData()
        fd.append("title", postData.title)
        fd.append("caption", postData.caption)

        // fd.append("image", postData.image)
        for (let d of postData.image) {
            fd.append("image", d)
        }
        // for (let d of multiImage) {
        //     fd.append("image", d)
        // }
        for (const x of fd.entries()) {
            console.log(x,"c");
        }
        // console.log(fd, "fd");
        dispatch(createPostAction(fd))
    }
    return <>

        {JSON.stringify([postData])}
        <Card sx={{ maxWidth: 345 }}>
            <Typography>Create New Post</Typography>

            <Input type='file' inputProps={{ multiple: true }} onChange={handleChange} placeholder="ff"></Input>
            {/* <Input type='file' inputProps={{ multiple: true }} onChange={e => setMultiImage(e.target.files)} placeholder="ff"></Input> */}
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                />
                <CardContent>
                    <TextField placeholder='add caption....'>add caption.....</TextField>
                </CardContent>


            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handleAddPost}>
                    Share
                </Button>
            </CardActions>
        </Card>
    </>
}
