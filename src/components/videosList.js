import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './videoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, index) =>{return(< VideoItem  key={index}
    video ={video}
    onVideoSelect ={onVideoSelect}
  />)});
  return (
    <Grid container spacing={5}>
      { listOfVideos }
    </Grid>
  )

}
 
export default VideoList;
