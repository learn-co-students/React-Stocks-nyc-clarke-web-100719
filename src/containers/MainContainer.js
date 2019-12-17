import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    renderedStocks: [],
    filter: "",
    sort: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(data => {
        this.setState({
          stocks: data,
          renderedStocks: data
        })
    })
  }

  buyStock = (id) => {
    let newStocks = [...this.state.renderedStocks]
    let targetIndex = newStocks.findIndex(stock => stock.id === id)
    newStocks[targetIndex] = {...newStocks[targetIndex], inPortfolio: true  }
    this.setState({
      renderedStocks: newStocks
    })
    //this.state.find(stock => stock.id === id)
    //add portfolio array to state and push stock into array
  }

  sellStock = (id) => {
    //make a copy of stocks
    //findindex of desired stock to change
    //change object at index's key inportfolio: false using spread operator to save other key in object
    //update state to reflect changes
    let newStocks = [...this.state.renderedStocks]
    let targetIndex = newStocks.findIndex(stock => stock.id === id)
    newStocks[targetIndex] = {...newStocks[targetIndex], inPortfolio: false  }
    this.setState({
      renderedStocks: newStocks
    })
  }

  handleSort = (e) => {
    let sortedStocks;
    let sortStatus;
    if (e.target.value === "Alphabetically") {
      sortedStocks = this.state.stocks.sort((a, b) => (a.name > b.name) ? 1 : -1)
      sortStatus = "Alphabetically"
    } else if (e.target.value === "Price") {
      sortedStocks = this.state.stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
      sortStatus = "Price"
    }
    this.setState({
      sort: sortStatus,
      renderedStocks: sortedStocks
    })
  }

  resetRenderedStocks = () => {
    this.setState({
      renderedStocks: [...this.state.stocks]
    })
  }

  handleFilter = (e) => {
    this.resetRenderedStocks()
    let filteredStocks;
    if (e.target.value === "Tech") {
      filteredStocks = this.state.stocks.filter(stock => stock.type === "Tech")
    }
    if (e.target.value === "Sportswear") {
      filteredStocks = this.state.stocks.filter(stock => stock.type === "Sportswear")
    }
    if (e.target.value === "Finance") {
      filteredStocks = this.state.stocks.filter(stock => stock.type === "Finance")
    }

    this.setState({
      renderedStocks: filteredStocks
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          handleSort={this.handleSort} 
          handleFilter={this.handleFilter}
          sort={this.state.sort} 
          filter={this.state.filter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.renderedStocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.renderedStocks} sellStock={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
