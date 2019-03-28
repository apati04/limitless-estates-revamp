import React from 'react';

const Player = ({ playerUrl }) => {
  return (
    <iframe
      src={`https://www.buzzsprout.com/255024/${playerUrl}?client_source=small_player&amp;iframe=true&amp;referrer=https://www.buzzsprout.com/255024.js?player=large`}
      width="100%"
      height="200"
      frameBorder="0"
      style={{ border: 0 }}
      scrolling="no"
      title="mutlifamily-podcast"
    />
  );
};

export default Player;
