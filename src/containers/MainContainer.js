import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocksForSale: [],
    portfolio: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(resp => resp.json())
      .then(stocks => this.setState({ stocksForSale: stocks }))
  }

  buy = (obj) => {
    let newPortfolio = [...this.state.portfolio, obj]
    this.setState({
      portfolio: newPortfolio
    })
  }

  sell = (obj) => {
    let newPortfolio = [...this.state.portfolio].filter(stock => stock.name !== obj.name)
    this.setState({
      portfolio: newPortfolio
    })
  }

  sortAlpha = () => {
    let sortedStocks = [...this.state.stocksForSale].sort((a, b) => a.name > b.name ? 1 : -1)
    this.setState({
      stocksForSale: sortedStocks
    })  
  }

  sortPrice = () => {
    let sortedStocks = [...this.state.stocksForSale].sort((a, b) => a.price > b.price ? 1 : -1)
    this.setState({
      stocksForSale: sortedStocks
    })  
  }

  filterList = (event) => {
    let filteredStocks = [...this.state.stocksForSale].filter(stock => stock.type === event.target.value)
    this.setState({
      stocksForSale: filteredStocks
    })  
  }

  render() {
    return (
      <div>
        <SearchBar sortAlpha={this.sortAlpha} sortPrice={this.sortPrice} filterList={this.filterList} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocksForSale} buy={this.buy}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} sell={this.sell} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
