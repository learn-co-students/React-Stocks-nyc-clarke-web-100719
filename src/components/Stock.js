import React from 'react'

const Stock = (props) => (
  <div>
    <div className="card">
      <div className="card-body" onClick={() => props.addStock ? props.addStock(props.stock) : props.removeStock(props.stock)}>
        <h5 className="card-title">
          <strong>{props.stock.name}</strong>
        </h5>
        <p className="card-text">
          {props.stock.ticker}: ${props.stock.price}
        </p>
      </div>
    </div>
  </div>
);

export default Stock
