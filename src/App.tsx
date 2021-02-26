import React from 'react';
import './App.css';
import SearchContactCard from './components/SearchContactCard';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


let contactDetails = {
    "userId": 1234,
    "fullName": "Gina Snelly",
    "profileImageUrl": "http://localhost:3000/face.jpg",
    "trust": 75,
}

const theme = createMuiTheme({
  palette: {
    text: {
        primary: '#6a3eea'
    },
    background : {
        default: '#eae8fe'
    }
  },
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <SearchContactCard contactDetails={contactDetails}></SearchContactCard>

          </header>
        </div>
    </MuiThemeProvider>
  );
}

export default App;
