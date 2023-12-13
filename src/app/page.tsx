'use client'
import Image from 'next/image'
import {Paper, Card, Box, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material'
import linkedinPhoto from '../../public/linkedinPhoto.jpeg'
import Course from './components/Course';

export default function Home() {

  const introduction = "Bio: "+"Ai-Hung is a beautiful teacher who is currently teaching Chinese in Macomb, IL. "
  +"She has been teaching Mandarin to non-native speakers for over 3 years and now you can schedule her classes online.";

  const courses: {title: string, body: string}[] = [
    {title: 'Chinese 101', body: 'In this class, we go over the basics of Mandarin.  How to count from 1-10,' + 
    'how to talk about your nationality, how to talk about food, and how to say I love you.'},
    {title: 'Chinese 102', body: 'In this class, we will be more conversational.  We will learn about Taiwanese' + 
    'culture, how to make dumplings, and how to say curse words.'}
  ];

  return (
    <Paper style={{height: '100vh'}}>
      <Box sx={{textAlign: 'center', backgroundColor: 'red', color: 'white',
    height: '8%', paddingTop: '2%', fontSize: '25px'}}>
        Ai-Hung Laoshi (老師)
      </Box>
      <Box sx={{backgroundColor: 'lightgrey', height: '92%', display: 'flex', flexDirection: 'row'}}>
        <Box sx={{height: '80%', width: '50%'}}>
          <Image src={linkedinPhoto} alt='linkedinPhoto' width='450' height='450'/>
          <Box>
            {introduction}
          </Box>
        </Box>
        <Box sx={{backgroundColor: 'grey', height: '80%', width: '50%'}}>
          {courses.map(course => 
            <Course title={course.title} body={course.body} />)}
        </Box>
      </Box>
    </Paper>
  )
}
