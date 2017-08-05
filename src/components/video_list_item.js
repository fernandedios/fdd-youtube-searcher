import React from 'react';

// receive video and onVideoSelect props
const VideoListItem = ({ video, onVideoSelect }) => {
  // console.log(video, onVideoSelect);
  const imageUrl = video.snippet.thumbnails.medium.url;
  const pubDate = doDate(video.snippet.publishedAt);

  return (
    <div className="col-md-4 resent-grid recommended-grid slider-top-grids">
      <div className="resent-grid-img recommended-grid-img">
        <a  href="#" onClick={() => onVideoSelect(video)}><img alt="" src={imageUrl} /></a>
      </div>
      <div className="resent-grid-info recommended-grid-info">
        <h3>
          <a href="#"
            onClick={() => onVideoSelect(video)}
            className="title title-info"
          >
            {video.snippet.title}
          </a>
        </h3>
        <ul>
          <li>
            <p className="author author-info">
            <a href={`https://www.youtube.com/channel/${video.snippet.channelId}`} className="author">{video.snippet.channelTitle}</a>
            </p>
          </li>
          <li className="right-list"><p className="views views-info">{pubDate}</p></li>
        </ul>
      </div>
    </div>
  );
};

const doDate = (stringDate) => {
  const msecs = Date.parse(stringDate);
  const date = new Date(msecs);

  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthNames[monthIndex]} ${year}`;
};

export default VideoListItem;
