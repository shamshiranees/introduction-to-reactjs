import React from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

function ProductTable({ tableData }) {
  return (
    <div style={{border: "2px solid green",padding:10}}>
      <div
        style={{ display: "flex", justifyContent: "flex-start", marginTop: 30, }}
      >
        <div style={styles.header}>Name</div>
        <div style={styles.header}>Price</div>
      </div>

      {Object.keys(tableData).map((keyName, i) => (
        <div>
          <ProductCategory name={keyName} />

          {tableData[keyName].map((item) => (
            <ProductRow data={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
const styles = {
  header: { width: 100, fontWeight: "bold" },
};
export default ProductTable;
