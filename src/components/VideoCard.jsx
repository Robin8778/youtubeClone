import React from 'react'
import { Link } from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoChannelTitle,demoChannelUr,demoVideoTitle, demoChannelUrl } from '../utils/constants';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
   <Card sx={{width:{xs:"100%",sm:"358px",md:"380px"},boxShadow:"none",borderRadius:2,backgroundColor:"black"}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia
        
         image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:{xs:"358px",sm:"358px",md:"380px"},height:180,borderRadius:2}}
         />
    </Link>
    
    <CardContent sx={{backgroundColor:"#1e1e1e",height:"80px"}}>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight="bold" color="#fff" >{snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}</Typography>
    </Link>
    <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight="bold" color="gray" sx={{display:"flex",alignItems:"center"}} >{snippet?.channelTitle||demoChannelTitle}<CheckCircle sx={{fontSize:12,color:"gray",ml:"5px"}}/></Typography>
    </Link>
    </CardContent>
   </Card>
  )
}

export default VideoCard