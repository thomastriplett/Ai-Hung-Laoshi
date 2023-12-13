import {Paper, Card, Box, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'
import * as React from 'react';

interface Props {
    title: string,
    body: string
}

export default function Course({title, body}: Props) {

    return(
        <Card sx={{marginBottom: '5px'}}>
        <CardMedia
          sx={{ height: 140, objectFit: 'scale-down'}}
          image='taiwanflag.png'
          title="Taiwan Flag"
          component='img'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
}