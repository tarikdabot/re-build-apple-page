import { useEffect, useState } from 'react';
import './Youtube.css'

const Youtube = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyBf01HdiVuCWsUhcmcZGmrtnObBUzoSqow"
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error('Error fetching YouTube data:', error));
  }, []);

  // console.log(videos);

  return <> 
  <div className="header">
        <h1>Latest Video</h1>
        </div><div className="videos-list">
      
      {videos.map((videoItem, index) => {
        const videoId = videoItem.id.videoId;
        const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
        return (
          <div className="video-container" key={index}>
            <a href={videoLink} target="_blank" rel="noreferrer">
              <img
                src={videoItem.snippet.thumbnails.high.url}
                alt={videoItem.snippet.title}
              />
            </a>
            <div className="videoinfo-wrapper">
              <a href={videoLink} target="_blank" rel="noreferrer">
                {videoItem.snippet.title}
              </a>
            </div>
            {/* <div className="video-discribtion">
              {videoItem.snippet.description
              }
            </div> */}
          </div>
        );
      })}
    </div>
  
  </>
   
};

export default Youtube;
