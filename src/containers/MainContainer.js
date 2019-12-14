import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  state={
    fetchStocks: [],
    catFilter: 'All',
    sortTerm: null,
    portfolio:[]
  }

  fetchStocks = () =>{
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        fetchStocks: [...json]
      })
    })
  }

  handleFilter = (filter) =>{
      this.setState({
        catFilter: filter
      })
  }
  handleSort = (term) => {
    console.log(term)
    this.setState({
      sortTerm: term
    })
  }

  componentDidMount(){
    this.fetchStocks()
  }

  filterData =()=>{
    let newData =[...this.state.fetchStocks]
    if(this.state.catFilter !== "All") newData = newData.filter(stock => stock.type === this.state.catFilter)
    switch(this.state.sortTerm){
      case "Alphabetically":
        newData.sort((a,b)=> a.name.localeCompare(b.name))
        break;
      case "Price":
        newData.sort((a,b)=> a.price-b.price)
        break;
        default:
        break;
    }
    return newData
  }

  getStock = (id) =>{
    if(![...this.state.portfolio].find(st => st.id === id)){
    let stock = [...this.state.fetchStocks].find(st => st.id === id)
    this.setState({
      portfolio: [...this.state.portfolio,stock]
    })
    }
  }

  sellStock = (id) =>{
    let portfolio = [...this.state.portfolio]
    let ind =portfolio.findIndex(st => st.id === id)
    portfolio.splice(ind,1)
    this.setState({
      portfolio
    })
  }

  render() {
    let finalStocks = this.filterData()
    return (
      <div>
        <SearchBar handleFilter={this.handleFilter} currentSort={this.state.sortTerm} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={finalStocks} handleClick={this.getStock}/>

            </div>
            <div className="col-4">

              <StockContainer stocks={this.state.portfolio} handleClick={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
