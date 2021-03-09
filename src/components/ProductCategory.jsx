import React from "react";

function ProductCategory({name}) {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", marginTop: 10 }}
    >
      <div style={styles.category}>{name}</div>
    </div>
  );
}
const styles = {
  category: {
    marginLeft: 3,
    fontWeight: "bold",
    borderColor: "red",
    borderWidth: 1,
    border: "2px solid turquoise",
  },
};
export default ProductCategory;
