import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  state = {
    portfolio: true
  }

  renderStocks = () => {
    return this.props.portfolioStocks.map(stock => <Stock key={stock.id} stock={stock} portfolio={this.state.portfolio} sellStock={this.props.sellStock} /> )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.renderStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
