import React from 'react';
import './scss/main.scss';
import Home from './components/Home';
import logo from './images/awesome-logo.svg';

class App extends React.Component {
  render () {
  return <Home LogoUrl={logo} title='Crea tu tarjeta de visita' subtitle='Crea mejores contactos profesionales de forma fácil y cómoda'/>
}
}

export default App;
