import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  //console.log(props.videos);
  const videoItems = props.videos.map(video => {
    // receive onVideoSelect prop index.js/parent component
    // and pass it to VideoListItem
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <div className="main-grids">
      <div className="top-grids">
        <div className="recommended-info">
          <h3>Search Results</h3>
        </div>
      {videoItems}
    </div>
  </div>
  );
};

export default VideoList;
