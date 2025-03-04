import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onRemoveStock}) {

  const displayPortfolio = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock} />
  });

  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPortfolio}
    </div>
  );
}

export default PortfolioContainer;
