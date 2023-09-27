import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8CC084',
      light: '#C1D7AE',
      dark: '#254441',
      contrastText: '#fff',
    }, 
    secondary: {
      main: '#B592A3',
      light: '#D6C2CC',
      dark: '#563947',
      contrastText: '#fff'
    }
  }
})

export default theme; 

