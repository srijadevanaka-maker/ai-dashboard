import React from "react";

function MetricsCard({ title, value }) {
  return (
    <div style={{
      background: "#f4f4f4",
      padding: "20px",
      borderRadius: "10px",
      width: "200px",
      textAlign: "center",
      margin: "10px"
    }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default MetricsCard;