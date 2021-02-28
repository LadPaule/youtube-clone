import React from 'react'
import { Grid } from '@material-ui/core'
import { SearchBar, VideoList, VideoDetails } from './components'
import youtube from './Api/youtube';
import './App.css'

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('Celtic woman')
  }

  onVideoSelect = (video) =>{
    this.setState({selectedVideo: video})
  }

  handleSubmit = async (searchTerm) => {
    const API_Key = 'AIzaSyCtCSZ2vF1mkVDBBcPKGwc7ro4aV4cvurk'
    const response = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,                
          key: API_Key,
          q: searchTerm,
        }    
    });

    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  render() {

    const { selectedVideo, videos } = this.state;


    return (
      <div>
        <Grid container justify="center" spacing ={5}>
          <Grid item xs={12}>
            <Grid container spacing={5}>

              <Grid item xs={12}>
                < SearchBar onFormSubmit={this.handleSubmit}/>
              </Grid>

              <Grid item xs={8}>
                < VideoDetails video={selectedVideo} />
              </Grid>

              <Grid item xs ={4}>
                < VideoList videos={videos}  onVideoSelect ={this.onVideoSelect}/>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default App;
