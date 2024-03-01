import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Play({ username, onClose }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`https://lichess.org/api/user/${username}`);
        setUserInfo(response.data);
        console.log(response);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [username]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', position: 'relative',height:'40vh',width:'40vw' }}>
      <span style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={onClose}>&times;</span>
      {userInfo ? (
        <div>
          <h2>{userInfo.username}</h2>
          <p>Draw Matches: {userInfo.count.draw}</p>
          <p>Lost Matches: {userInfo.count.loss}</p>
          <p>Win Matches: {userInfo.count.win}</p>
          <p>Bookmark Number: {userInfo.count.bookmark}</p>
          <p>Total Play time: {userInfo.playTime.total}</p>
          <p>Profile Link: {userInfo.url}</p>
          {/* Add more user info here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
  );
}

export default Play;
