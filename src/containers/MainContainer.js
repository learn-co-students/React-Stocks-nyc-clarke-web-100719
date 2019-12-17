import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    sort: null,
    filter: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render() {
    console.log(this.state.filter)
    return (
      <div>
        <SearchBar handleChange={this.handleChange} sort={this.state.sort} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.stocks} addToPortfolio={this.props.addToPortfolio} sort={this.state.sort} filter={this.state.filter} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.props.portfolio} sellStock={this.props.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
