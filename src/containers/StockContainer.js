import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  state = {
    portfolio: false
  }

  renderStocks = () => {
    let stocksToDisplay = this.props.stocks;
    if (this.props.sort === 'Alphabetically') {
      stocksToDisplay = stocksToDisplay.sort((stockA, stockB) => stockA.ticker.localeCompare(stockB.ticker))
    } else if (this.props.sort === 'Price') {
      stocksToDisplay = stocksToDisplay.sort((stockA, stockB) => stockB.price - stockA.price)
    }
    
    if (this.props.filter) {
      stocksToDisplay = stocksToDisplay.filter(stock => stock.type === this.props.filter)
    }
    
    return stocksToDisplay.map(stock => <Stock stock={stock} key={stock.id} addToPortfolio={this.props.addToPortfolio} portfolio={this.state.portfolio} />)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
