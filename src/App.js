import logo from './logo.svg';
import './App.css';
import FiveDayForecast from './components/fiveDayForecast';
import Header from './components/header';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <FiveDayForecast />
    </Fragment>
  )
}

export default App;
