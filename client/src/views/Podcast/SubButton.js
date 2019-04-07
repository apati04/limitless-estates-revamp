import React from 'react';

const SubButton = ({ appLogo, podcastUrl, alt }) => {
  return (
    <div className="view mb-4">
      <div>
        <a
          className="d-flex justify-content-start align-items-center"
          href={podcastUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="img-fluid mb-3"
            style={{ maxHeight: '40px', width: '40px' }}
            src={appLogo}
            alt={alt}
          />
          <p
            style={{
              color: 'rgb(33, 35, 37)',
              fontWeight: '500',
              letterSpacing: '0.6px'
            }}
            className="ml-3"
          >
            {alt}
          </p>
        </a>
      </div>
    </div>
  );
};
// ;

export default SubButton;
