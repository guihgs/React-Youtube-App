import React from 'react';

import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

const VideoList = ({ Videos, onVideoSelect }) => {
    const listOfVideos = Videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={ud} video={video} />)

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}
export default VideoList;