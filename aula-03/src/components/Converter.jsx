import React from 'react';
import '../App.css';

class Converter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            moedaA: 0,
            moedaB: "",
        }
    }

    _converter = () => {
        var moedas = `${this.props.moedaA}_${this.props.moedaB}`
        var url = `https://free.currconv.com/api/v7/convert?q=${moedas}&compact=ultra&apiKey=425c7829475168b159cd`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            var cotacao = data[moedas]
            var valor_convertido = parseFloat(this.state.moedaA*cotacao).toFixed(2)
            this.setState({moedaB: valor_convertido})
        })
    }

    render(){
        return (
            <div className="App">
                <div className="converterDiv">
                    <h3>Converter de {this.props.moedaA} para {this.props.moedaB}</h3>

                    <input 
                        type="text" 
                        onChange={(event) => {
                            this.setState({moedaA: event.target.value})
                        }}
                    />

                    <input 
                        type="button"
                        value="Converter" 
                        onClick={() => {
                            this._converter()
                        }}
                    />

                    <h3>Valor convertido: {this.state.moedaB}</h3>
                </div>
            </div>
        )
    }
}

export default Converter;
