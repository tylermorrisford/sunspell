import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const YouTubePlayer = ({ youtubeUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract the video ID from the YouTube URL
  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(youtubeUrl);

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  // Construct the thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div style={{ width: '100%', maxWidth: '640px', position: 'relative' }}>
      {!isPlaying ? (
        // thumbnail and play button
        <div
          style={{ position: 'relative', cursor: 'pointer' }}
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={thumbnailUrl}
            alt='YouTube Video Thumbnail'
            style={{ width: '100%', display: 'block' }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '48px',
              color: '#fff',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            ▶
          </div>
        </div>
      ) : (
        <ReactPlayer
          url={youtubeUrl}
          playing={isPlaying}
          controls={true}
          width='100%'
          height='480px'
        />
      )}
    </div>
  );
};

export default YouTubePlayer;
