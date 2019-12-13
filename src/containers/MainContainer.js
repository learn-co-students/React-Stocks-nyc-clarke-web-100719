import React, { Component } from 'react';
import StockContainer from './StockContainer'
// Using two StockContainers instead of PortfolioContainer
// import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    sortBy: "",
    filter: "All"
  }

  fetchStocks = () => {
    fetch('http://localhost:3000/stocks')
      .then(resp => resp.json())
      .then(json => this.setState({ stocks: json }))
  }
        
        // INDIVIDUAL stocks
        // json.forEach(stock => this.setState(previousState => {
        //   return {
        //     stocks: [...previousState.stocks, stock]
        //   }
        // }))

  componentDidMount () {
    this.fetchStocks()
  }

  // abstracted change state function don't use the commented out functions below anymore
  changeState = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  // changeSortBy = (sortOption) => {
  //   this.setState({
  //     sortBy: sortOption
  //   })
  // }

  // changeFilter = (filterOption) => {
  //   this.setState({
  //     filter: filterOption
  //   })
  // }

  addStock = (stock) => {
    if (!this.state.portfolioStocks.includes(stock)) { 
      //prevent adding stock if it's already included. Will have to remove if we want to include multiple stocks in portfolio
      this.setState(previousState => {
        return {
          portfolioStocks: [...previousState.portfolioStocks, stock]
        }
      })
    }
  }

  removeStock = (stock) => {
    this.setState(previousState => {
      return {
        portfolioStocks: previousState.portfolioStocks.filter(pStock => pStock !== stock)
      }
    })
  }

  stocksToDisplay = () => {
    let displayStocks = [...this.state.stocks]

    switch(this.state.filter) {
      case "All":
        // do nothing
        break
      case "Tech":
        displayStocks = displayStocks.filter(stock => stock.type === "Tech")
        break
      case "Sportswear":
        displayStocks = displayStocks.filter(stock => stock.type === "Sportswear")

        break
      case "Finance":
        displayStocks = displayStocks.filter(stock => stock.type === "Finance")
        break
      default:
    }



    switch(this.state.sortBy) {
      case "":
        // do nothing
        break
      case "Alphabetically":
        displayStocks.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name))
        break
      case "Price":
        displayStocks.sort((stockA, stockB) => stockA.price - stockB.price)
        break
      default:
    }
    return displayStocks
  }

  render() {
    return (
      <div>
        <SearchBar changeState={this.changeState} sortBy={this.state.sortBy} filter={this.state.filter}  />

          <div className="row">
            <div className="col-8">
              <h2>Stocks</h2>
              <StockContainer stocks={this.stocksToDisplay()} moveStock={this.addStock}/>

            </div>
            <div className="col-4">
              <h2>My Portfolio</h2>

              <StockContainer stocks={this.state.portfolioStocks} moveStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }
  
}

// just going to be fancy and use StockContainer twice.
// <PortfolioContainer stocks={this.state.portfolioStocks} moveStock={this.removeStock} /> 

// passed both change functions manually
//{/* <SearchBar changeSortBy={this.changeSortBy} sortBy={this.state.sortBy} changeFilter={this.changeFilter} filter={this.state.filter}  /> */}

export default MainContainer;
