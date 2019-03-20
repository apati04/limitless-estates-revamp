import {createMuiTheme} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import lightBlue from '@material-ui/core/colors/lightBlue';
const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};
const cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px',
};

const title = {
  color: '#3C4858',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
};

const cardTitle = {
  ...title,
  marginTop: '.625rem',
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

const cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem',
};

const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};
const rawTheme = createMuiTheme ({
  containerFluid,
  container,
  cardHeader,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  palette: {
    primary: {
      light: blue[300],
      main: blue[900],
      dark: blue[900],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      xLight: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      xLight: green[50],
      dark: green[700],
    },
  },
  overrides: {
    MuiButton: {
      extendedFab: {
        margin: 8,
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Work-Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: "'Roboto Condensed', sans-serif",
  },
  overlayEffect: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.56)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  lightOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: rawTheme.typography.fontFamilySecondary,
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
