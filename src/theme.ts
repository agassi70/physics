import {responsiveFontSizes, createTheme} from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#33A7FF',
      dark: '#005799',
      light: '#0090FF',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#69D68C',
      dark: '#0F993C',
      light: '#DCF5E4',
      contrastText: '#FFF',
    },
    info: {
      main: '#66BDFF',
      dark: '#B9E0FF',
      light: '#D9EEFF',
      contrastText: '#FFF',
    },
    warning: {
      main: '#ECE2F9',
      dark: '#6E4D99',
      light: '#ECE2F9',
      contrastText: '#FFF',
    },
    success: {
      main: '#3AC066',
      dark: '#0A6628',
      light: '#DCF5E4',
      contrastText: '#FFF',
    },
    error: {
      main: '#EB5757',
      dark: '#B30707',
      light: '#FFE9E9',
      contrastText: '#FFF',
    },
    grey: {
      50: '#F5F8FA',
      100: '#EEF2F4',
      200: '#D0D4D7', //
      300: '#ACB1B5',
      400: '#777C80',
      500: '#45494D', //
      600: '#252627',
      700: '#45494D', // -
      800: '#191B1D',
      900: '#556169',

      A100: '#191B1D',
      A400: '#D0D4D7',
      A700: '#D9EEFF',
    },
    designGrey: {
      100: '#F0F5FA',
      200: '#CFDAE4',
      300: '#ACBCC9',
      400: '#76858F',
      500: '#5F6D76',
      600: '#BCD3E4',
      900: '#3D4145',
    },
    text: {
      primary: '#252627',
      secondary: '#76858F',
      disabled: '#ACB1B5',
      hint: '#ACB1B5',
    },
    background: {
      default: '#fff',
      paper: '#F5F8FA',
    },
  },
  typography: {
    fontFamily: [
      'Work Sans',
      'sans-serif',
    ].join(','),
    htmlFontSize: 16,
    fontSize: 14,
    button: {
      fontSize: '0.875rem',
      textTransform: 'none',
    },
    h1: {
      fontSize: '3.875rem !important', // 62
      fontWeight: 'inherit',
    },
    h2: {
      fontSize: '2.25rem', // 36
      fontWeight: 'inherit',
    },
    h3: {
      fontSize: '1.625rem', // 26
      fontWeight: 'inherit',
    },
    h4: {
      fontSize: '1.25rem !important', // 20
      fontWeight: 'inherit',
    },
    h5: {
      fontSize: '1rem !important', // 16
      fontWeight: 'inherit',
    },
    h6: {
      fontSize: '1.125rem !important', // 18
      fontWeight: 'inherit',
    },
    subtitle2: {
      fontSize: '0.9375rem', // 15
      fontWeight: 'inherit',
    },
    subtitle1: {
      fontSize: '0.8125rem', // 13
      fontWeight: 'inherit',
    },
    body1: {
      fontSize: '0.875rem', // 14
      fontWeight: 'inherit',
    },
    body2: {
      fontSize: '0.75rem', // 12
      fontWeight: 'inherit',
    },
  },
});

theme.overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        WebkitFontSmoothing: 'auto',
      },
    },
  },
};

theme.overrides.MuiButton = {
  label: {
    fontSize: '0.9375rem',
    fontWeight: 700,
    lineHeight: 1.07,
  },
  text: {
    padding: '8px 20px',
    borderRadius: 4,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.designGrey["100"],
      '& .MuiButton-label': {
        color: theme.palette.primary.light,
      },
      '& path': {
        fill: theme.palette.primary.light,
      },
    },
    '&:active': {
      backgroundColor: 'transparent',
      '& .MuiButton-label': {
        color: theme.palette.primary.dark,
      },
      '& path': {
        fill: theme.palette.primary.dark,
      },
    },
  }
}

theme.overrides.MuiMenu = {
  paper: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 12,
    boxShadow: '0px 4px 12px rgba(0, 46, 79, 0.08)',
  }
}

theme.overrides.MuiMenuItem = {
  root: {
    fontWeight: 500,
    '&:hover': {
      color: theme.palette.primary.light,
    }
  }
}

// theme.overrides.MuiButton = {
//   root: {
//     height: 44,
//     borderRadius: 14,
//     width: 190,
//   },
//   sizeLarge: {
//     width: 300,
//   },
//   sizeSmall: {
//     width: 136,
//   },
//   label: {
//     fontSize: '0.9375rem',
//     fontWeight: 700,
//     lineHeight: 1.07,
//     paddingTop: 3,
//     '& .MuiButton-startIcon': {
//       marginBottom: 3,
//     },
//   },
//   contained: {
//     '&.Mui-focusVisible, &:active': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//     '&:hover': {
//       backgroundColor: theme.palette.primary.light,
//     },
//     '&:disabled': {
//       backgroundColor: theme.palette.grey['100'],
//       color: theme.palette.grey['300'],
//     },
//   },
//   containedPrimary: {
//     '&.Mui-focusVisible, &:active': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//     '&:hover': {
//       backgroundColor: theme.palette.primary.light,
//     },
//     '&:disabled': {
//       backgroundColor: theme.palette.grey['100'],
//       color: theme.palette.grey['300'],
//     },
//   },
//   containedSecondary: {
//     '&:hover': {
//       backgroundColor: '#15D353',
//     },
//     '&.Mui-focusVisible, &:active': {
//       backgroundColor: theme.palette.secondary.dark,
//     },
//     '&:disabled': {
//       backgroundColor: theme.palette.grey['100'],
//       color: theme.palette.grey['300'],
//     },
//   },
//   outlined: {
//     backgroundColor: theme.palette.background.default,
//     borderColor: theme.palette.designGrey['300'],
//     color: theme.palette.grey['600'],
//     '&:hover': {
//       borderColor: theme.palette.grey['600'],
//       backgroundColor: theme.palette.background.default,
//     },
//     '&.Mui-focusVisible, &:active': {
//       borderColor: theme.palette.grey['600'],
//       backgroundColor: theme.palette.grey['100'],
//     },
//     '&.Mui-disabled': {
//       borderColor: theme.palette.grey['100'],
//       backgroundColor: theme.palette.background.default,
//       color: theme.palette.grey['300'],
//     },
//   },
//   outlinedPrimary: {
//     backgroundColor: theme.palette.background.default,
//     borderColor: theme.palette.primary.light,
//     color: theme.palette.primary.light,
//     width: 190,
//     '& path': {
//       fill: theme.palette.primary.light,
//     },
//     '&:hover path': {
//       fill: theme.palette.background.default,
//     },
//     '&:hover': {
//       borderColor: theme.palette.info.main,
//       backgroundColor: theme.palette.info.main,
//       color: theme.palette.background.default,
//     },
//     '&.Mui-focusVisible, &:active': {
//       borderColor: theme.palette.primary.light,
//       backgroundColor: theme.palette.primary.light,
//       color: theme.palette.background.default,
//     },
//     '&.Mui-disabled': {
//       borderColor: theme.palette.grey['100'],
//       backgroundColor: theme.palette.background.default,
//       color: theme.palette.grey['300'],
//     },
//   },
//   text: {
//     width: 120,
//     height: 36,
//     color: theme.palette.text.primary,
//     '&:hover': {
//       backgroundColor: 'transparent',
//       '& .MuiButton-label': {
//         color: theme.palette.primary.light,
//       },
//       '& path': {
//         fill: theme.palette.primary.light,
//       },
//     },
//     '&:active': {
//       backgroundColor: 'transparent',
//       '& .MuiButton-label': {
//         color: theme.palette.primary.dark,
//       },
//       '& path': {
//         fill: theme.palette.primary.dark,
//       },
//     },
//   },
// }

export default responsiveFontSizes(theme);
