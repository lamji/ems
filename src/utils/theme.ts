import { createTheme } from '@mui/material/styles';

export const customTheme = {
  palette: {
    primary: {
      main: '#7aa2e3',
      light: '#afc7ee',
      dark: '#3b76d6',
      contrastText: '#f6f8fd',
    },
    secondary: {
      main: '#e3bb7a',
      light: '#eed6af',
      dark: '#887049',
      contrastText: '#fffefc',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#ffffff',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
};

export const theme = createTheme({
  ...customTheme,
});
