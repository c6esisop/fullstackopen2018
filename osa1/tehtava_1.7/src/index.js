import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0,
        lukumaara: 0
      }
    }
  
    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1,
        lukumaara: this.state.lukumaara + 1
      })
    }
  
    klikNeutraali = () => {
        this.setState({
          neutraali: this.state.neutraali + 1,
          lukumaara: this.state.lukumaara + 1
        })
      }
    
    klikHuono = () => {
      this.setState({
        huono: this.state.huono + 1,
        lukumaara: this.state.lukumaara + 1
      })
    }
  
    render() {
        const keskiarvo = Number.parseFloat((this.state.hyva*1 + this.state.neutraali*0 + this.state.huono*(-1))/this.state.lukumaara).toPrecision(1)
        const positiivisia = Number.parseFloat(100*(this.state.hyva/this.state.lukumaara)).toPrecision(4)
      return (
        <div>
          <div>
            <h2>anna palautetta</h2>

            <button onClick={this.klikHyva}>hyvä</button>
            <button onClick={this.klikNeutraali}>neutraali</button>
            <button onClick={this.klikHuono}>huono</button>
            
            <h2>statistiikka</h2>

            hyvä {this.state.hyva} <br />
            neutraali {this.state.neutraali} <br />
            huono {this.state.huono} <br />
            keskiarvo {keskiarvo} <br />
            positiivisia {positiivisia} %

          </div>
        </div>
      )
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

