import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState('Chloe');

  useEffect(() => {
    console.log('useEffect');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular'
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .then(error => console.log(error))
  }, []);

  return (
    <>
      <div className="">hello</div>
    </>
  );
}

export default App;
