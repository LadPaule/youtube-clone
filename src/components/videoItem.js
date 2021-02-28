import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return ( 
    <Grid item xs={12}>
      <Paper style={{display: "flex", alignItems: "center", cursor: 'pointer', maxWidth: "100%"}} onClick = {()=>{onVideoSelect(video)}}>
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" style={{marginRight: "2px", width: "240px", height: "135px"}}/>
        <Typography style ={{textSizeAdjust: "auto"}} variant ="subtitle1"><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
   );
}
 
export default VideoItem;
