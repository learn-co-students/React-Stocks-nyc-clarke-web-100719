import React from 'react'

const Stock = (props) => {
  const handleClick = () => {
    props.moveStock(props.stock)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{
              //Company Name
              props.stock.name
            }</h5>
          <p className="card-text">{
              //ticker: stock price
              `${props.stock.ticker}: ${props.stock.price}`
            }</p>
        </div>
      </div>
    </div>
)};

export default Stock
