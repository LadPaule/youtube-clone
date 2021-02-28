import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetails = ({ video }) => {
  if(!video) return <div> Loading Please wait ...  </div>  

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return ( 
    <React.Fragment>
      <Paper elevation ={6} style={{height: '70%'}}>
        <iFrame frameBorder = "0" height ="70%" width="100%" title="Video Player" src={videoSrc}/>
      </Paper>

      <Paper elevation ={3} style={{padding: '15px'}}>
        <Typography variant ="h5">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant ="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant ="subtitle2">{video.snippet.desciption}</Typography>

      </Paper>
    </React.Fragment>
   );
}
 
export default VideoDetails;