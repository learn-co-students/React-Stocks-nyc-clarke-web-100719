import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = 'http://localhost:3000/stocks';

class App extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  addToPortfolio = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })
  }

  sellStock = (stock) => {
    let portFolioWithoutSelectedStock = this.state.portfolio.filter(portStock => portStock.id !== stock.id)
    this.setState({
      portfolio: portFolioWithoutSelectedStock
    })
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(stocks => this.setState({
      stocks: stocks
    }))
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks={this.state.stocks} addToPortfolio={this.addToPortfolio} portfolio={this.state.portfolio} sellStock={this.sellStock} />
      </div>
    );
  }
}

export default App;
