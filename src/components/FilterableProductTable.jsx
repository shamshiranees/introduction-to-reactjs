import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FilterableProductTable() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(sortData());
  }, []);


  return (
    <div style={{ justifyContent: "center",padding:15,margin:15, width:'25%',border: "2px solid orange" }}>
      <SearchBar/>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProductTable tableData={data} />
      </div>
      </div>
  
  );
}

export default FilterableProductTable;

function sortData() {
  const dataArray = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  var sortedData = {};
  for (let index = 0; index < dataArray.length; index++) {
    const element = dataArray[index];
    if (sortedData[element.category] === undefined) {
      sortedData[element.category] = [element];
    } else {
      sortedData[element.category].push(element);
    }
  }
console.log("ssss",sortedData);

  return sortedData;
}
