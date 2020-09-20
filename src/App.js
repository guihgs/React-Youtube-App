import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('recent videos');
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('Search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: '[API KEY]',
                q: searchTerm,
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render() {
        const { selectedVideo, videos } = this.state;

        return (
           <Grid justify="center" container spacing={10}>
               <Grid item xs={12}>
                   {/* Search Bar */}
                   <SearchBar onFormSubmit={this.handleSubmit} />
               </Grid>
               <Grid item xs={8}>
                   {/* Video Detail */}
                   <VideoDetail video={selectedVideo} />
               </Grid>
               <Grid item xs={4}>
                   {/* Video List */}
                   <VideoList Videos={videos} onVideoSelect={this.onVideoSelect} />
               </Grid>
           </Grid>
        )
    }
}
//const App = () => {
//    return (<h1>Youtube app</h1>);
//}
export default App;