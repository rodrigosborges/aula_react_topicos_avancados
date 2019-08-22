import React from 'react';
import '../App.css';
import Converter from '../components/Converter.jsx';

class ConverterScreen extends React.Component{

  render(){
    return (
      <div className="App">
        <div>
          <Converter moedaA="USD" moedaB="BRL"/>
          <Converter moedaA="CAD" moedaB="BRL"/>
          <Converter moedaA="EUR" moedaB="BRL"/>
        </div>
        <div>
          <Converter moedaA="BRL" moedaB="USD"/>
          <Converter moedaA="BRL" moedaB="CAD"/>
          <Converter moedaA="BRL" moedaB="EUR"/>
        </div>
      </div>
    )
  }
}

export default ConverterScreen;
