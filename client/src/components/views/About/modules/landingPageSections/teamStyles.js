import { cardTitle, title } from '../mkr';
import imagesStyle from '../imageStyles';

const teamStyle = {
  section: {
    padding: '4.375rem 0',
    textAlign: 'center'
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '1.875rem',
    minHeight: '2rem',
    textDecoration: 'none'
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cardTitle,
  smallTitle: {
    color: '#6c757d',
    fontWeight: 400
  },
  description: {
    color: 'rgba(48,48,48,0.88)'
  },
  justifyCenter: {
    justifyContent: 'center !important'
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '2.5625rem',
    fontSize: '1.25rem',
    color: 'rgba(88,88,88,0.88)'
  },
  margin5: {
    margin: '5px'
  }
};

export default teamStyle;
