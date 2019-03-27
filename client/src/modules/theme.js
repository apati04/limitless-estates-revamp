import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import cardStyles from '../components/views/About/modules/landingPageSections/cardStyles';
import landingStyles from '../components/views/About/modules/landingPage';
import teamStyles from '../components/views/About/modules/landingPageSections/teamStyles';
import wavesWhite from '../components/waves-white.svg';
import productStyles from '../components/views/About/modules/landingPageSections/productStyles';
import * as matStyles from '../components/views/About/modules/mkr';

const rawTheme = createMuiTheme({
  cardStyles,
  ...matStyles,
  landingStyles,
  teamStyles,
  productStyles,
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: '0.9375rem 1.875rem'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  palette: {
    primary: {
      light: '#35afea',
      main: blue[500],
      dark: '#026ca0'
    },
    secondary: {
      light: '#68b36b',
      main: green[600],
      dark: '#2e7031'
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
      root: {
        padding: '12px 30px',
        margin: '.3125rem 1px',
        lineHeight: '1.42857143'
      },
      sizeSmall: {
        padding: '0.40625rem 1.25rem',
        fontSize: '0.6875rem',
        lineHeight: '1.5',
        borderRadius: '0.2rem'
      },
      sizeLarge: {
        padding: '1.125rem 2.25rem',
        fontSize: '0.875rem',
        letterSpacing: '0.5px',
        lineHeight: '1.333333',
        borderRadius: '0.2rem'
      },

      extendedFab: {
        margin: 8
      }
    },
    MuiGrid: {
      container: {
        marginRight: '-15px',
        marginLeft: '-15px',
        width: 'auto'
      },
      item: {
        position: 'relative',
        width: '100%',
        minHeight: '1px',
        paddingRight: '15px',
        paddingLeft: '15px',
        flexBasis: 'auto'
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
    MuiToolbar: {
      root: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    MuiCard: {
      root: {
        border: '0',
        marginBottom: '30px',
        borderRadius: '6px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#fff',
        width: '100%',
        // boxShadow:
        //   '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        // fontSize: '.875rem',
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
  typography: {
    useNextVariants: true,
    fontFamily: '"Nunito Sans", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
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
  preFooter: {
    width: '100%',
    backgroundImage: `url(${wavesWhite}),linear-gradient(to right, #0b72dc, #399ff0)`,
    backgroundPosition: 'initial',
    backgroundSize: 'cover, cover',
    textAlign: 'center'
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
      fontFamily: 'Roboto Slab',
      fontSize: 24,
      color: '#424242',
      letterSpacing: '0.28px',
      lineHeight: '32px',
      fontWeight: rawTheme.typography.fontWeightRegular
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 20
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
      fontSize: 15,
      fontWeight: rawTheme.typography.fontWeightLight
    }
  }
};

export default theme;
