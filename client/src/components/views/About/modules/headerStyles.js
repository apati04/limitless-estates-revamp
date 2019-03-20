import {container} from './mkr';

const headerStyle = {
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '0px',
    padding: '0.2rem 0',
    marginBottom: '20px',
    width: '100%',
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'relative',
    zIndex: 'unset',
  },
  absolute: {
    position: 'absolute',
    zIndex: '1100',
  },
  fixed: {
    position: 'fixed',
    zIndex: '1100',
  },
  container: {
    ...container,
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  flex: {
    flex: 1,
  },

  appResponsive: {
    margin: '20px 10px',
  },

  transparent: {
    backgroundColor: 'rgba(0,0,0,0.2)!important',
    // boxShadow: 'none',
    padding: '8px 0',
    color: '#FFFFFF',
  },
  dark: {
    color: '#FFFFFF',
    backgroundColor: '#212121 !important',
    boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)',
  },
  white: {
    border: '0',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    backgroundColor: '#fff !important',
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
  },
};

export default headerStyle;
