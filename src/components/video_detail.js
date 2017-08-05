import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="row">
      <div className="video-detail col-md-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={url} className="embed-responsive-item"></iframe>
        </div>
      </div>
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-heading">{video.snippet.title}</div>
          <div className="panel-body">
            <p>{video.snippet.description}</p>
            <p className="author author-info">
              Channel: <a href={`https://www.youtube.com/channel/${video.snippet.channelId}`} className="author">{video.snippet.channelTitle}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
