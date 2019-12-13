import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {


  render() {
    return (
      <div>
        {
          this.props.stocks.map(stock => <Stock moveStock={this.props.moveStock} stock={stock} key={stock.id} />)
          // currently no duplicates allowed. if allowed, key will either have to be handled differently
        }
      </div>
    );
  }

}

export default StockContainer;
