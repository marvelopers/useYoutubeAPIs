import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('Chloe');

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error))
  }, []);

  return (
    <VideoList videos={videos} />
  );
}

export default App;
