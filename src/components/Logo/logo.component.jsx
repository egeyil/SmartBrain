import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma5 mt0' style={{ maxWidth: '150px' }}>
      <Tilt
        style={{
          maxWidth: '150px',
        }}
      >
        <div
          className='br2 shadow-2'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
            backgroundImage: 'linear-gradient(-100deg, #08aeea 0%, #2af598 100%)',
          }}
        >
          <img alt='logo image' src={brain} style={{ maxHeight: '100px', maxWidth: '100px' }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
