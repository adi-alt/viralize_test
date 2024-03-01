import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Play from './Play';

function Rapid() {
  const [topPlayers, setTopPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const fetchTopPlayers = async () => {
      try {
        const response = await axios.get('https://lichess.org/api/player');
        setTopPlayers(response.data.rapid);
      } catch (error) {
        console.error('Error fetching top players:', error);
      }
    };

    fetchTopPlayers();
  }, []);

  const handleCardClick = (username) => {
    setSelectedPlayer(username);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Top Players For Rapid</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {topPlayers.map((player, index) => (
          <div key={index} style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '5px', margin: '10px', padding: '10px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleCardClick(player.username)}>
            <h2>{player.username}</h2>
            <p>Rating: {player.perfs.rapid.rating}</p>
          </div>
        ))}
      </div>
      {selectedPlayer && (
        <Play username={selectedPlayer} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Rapid;
