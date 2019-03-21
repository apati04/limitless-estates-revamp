import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
};
const cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px'
};

const title = {
  color: '#3C4858',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const cardTitle = {
  ...title,
  marginTop: '.625rem'
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem'
  }
};

const cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem'
};

const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px'
  }
};
const rawTheme = createMuiTheme({
  containerFluid,
  container,
  cardHeader,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '0.9375rem 1.875rem'
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[900],
      dark: blue[900]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e'
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700]
    },
    success: {
      xLight: green[50],
      dark: green[700]
    }
  },
  overrides: {
    MuiButton: {
      extendedFab: {
        margin: 8
      }
    },
    MuiAppBar: {
      root: {
        marginBottom: '-20px',
        zIndex: '100',
        position: 'relative',

        '& header': {
          borderRadius: '0'
        }
      }
    },
    MuiCard: {
      root: {
        border: '0',
        marginBottom: '30px',
        marginTop: '30px',
        borderRadius: '6px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
        width: '100%',
        boxShadow:
          '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        fontSize: '.875rem',
        transition: 'all 300ms linear'
      }
    },
    MuiCardContent: {
      root: {
        padding: '0.9375rem 1.875rem',
        flex: '1 1 auto'
      }
    },
    MuiCardActionArea: {
      root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: '0.9375rem 1.875rem'
      }
    },
    MuiCardHeader: {
      root: {
        borderRadius: '3px',
        padding: '1rem 15px',
        marginLeft: '15px',
        marginRight: '15px',
        marginTop: '-30px',
        border: '0',
        marginBottom: '0'
      },
      title: {
        color: '#3C4858',
        margin: '1.75rem 0 0.875rem',
        textDecoration: 'none',
        fontWeight: '700',
        fontFamily: `"Roboto Slab", "Times New Roman", serif`
      },
      subheader: {
        marginBottom: '0',
        marginTop: '-.375rem'
      }
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Work-Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif"
  },
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.56)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  lightOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
});
const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase'
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200]
    }
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14
    }
  }
};

export default theme;
