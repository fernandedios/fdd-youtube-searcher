import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'YOUR API KEY HERE';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('movie trailers');
  }

  videoSearch(term) {
    const params = {
      part: 'snippet',
      key: API_KEY,
      q: term,
      maxResults: 12,
      type: 'video'
    };

    axios.get(ROOT_URL, { params })
      .then((response) => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0]
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    // throttle function call to once every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);

    // pass videos data as props
    // pass onVideoSelect function as props
    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#wrapper'));
