import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setUserInfo(response.data);
      setError(null);
    } catch (error) {
      setUserInfo(null);
      setError('User not found');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User Search Placessss</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleSearch} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userInfo && (
        <div>
           <h2>UserName :{userInfo.username}</h2>
          <p>Draw Matches: {userInfo.count.draw}</p>
          <p>Lost Matches: {userInfo.count.loss}</p>
          <p>Win Matches: {userInfo.count.win}</p>
          <p>Bookmark Number: {userInfo.count.bookmark}</p>
          <p>Total Play time: {userInfo.playTime.total}</p>
          <p>Profile Link: {userInfo.url}</p>
          {/* Display more user info here */}
        </div>
      )}
    </div>
  );
}

export default Home;
