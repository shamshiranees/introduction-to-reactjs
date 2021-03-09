import React from "react";

function ProductRow({ data }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", marginTop: 10,border: "2px solid red", }}
    >
      <div style={styles.name}>{data.name}</div>
      <div style={styles.name}>{data.price}</div>
    </div>
  );
}

export default ProductRow;
const styles = {
  name: { width: 100 },
};
