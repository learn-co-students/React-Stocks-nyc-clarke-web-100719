import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
      stocks: [],
      stockPortfolio: [],
      stockDisplay: [],
      alphaSort: false,
      priceSort: false
  }
  
  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        stocks: data,
        stockDisplay: data
      })
    })
  }

  addStock = (stock) => {
        this.setState({
          stockPortfolio: [...this.state.stockPortfolio, stock]
        })
  }

  sortStocks = (sortValue) => {
    let arr = []
    if(sortValue === 'Alphabetically' && !this.state.alphaSort){
      arr = this.state.stockDisplay.sort((a, b) => a.name > b.name ? 1 : -1)
      this.setState({
        stockDisplay: arr,
        alphaSort: !this.state.alphaSort
      })
    } else if(sortValue === 'Price'){
      arr = this.state.stockDisplay.sort((a, b)=> a.price - b.price)
      this.setState({
        stockDisplay: arr
      })
    }
  }

  filterStocks = (filterValue) => {
    let arr = []
    if (filterValue === 'Tech'){
      arr = this.state.stocks.filter(stock => stock.type === filterValue)
    } else if (filterValue === 'Sportswear'){
      arr = this.state.stocks.filter(stock => stock.type === filterValue)
    } else if (filterValue === 'Finance'){
      arr = this.state.stocks.filter(stock => stock.type === filterValue)
    }
    this.setState({
      stockDisplay: arr
    })
  }

  sellStock = (soldStock) => {
    this.setState({
      stockPortfolio: this.state.stockPortfolio.filter(stock => {
        return stock !== soldStock
      })
    })
  }


  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} alphaSort={this.state.alphaSort} filterStocks={this.filterStocks}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.stockDisplay} addStock={this.addStock}/>
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.stockPortfolio} removeStock={this.sellStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
