const parallaxStyle = {
  parallax: {
    height: '90vh',
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center'
  },

  lightFilter: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.36)'
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''"
    }
  },
  filter: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.35)'
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: "''"
    }
  },
  small: {
    height: '25rem'
  },
  medium: {
    height: '34rem'
  }
};

export default parallaxStyle;
