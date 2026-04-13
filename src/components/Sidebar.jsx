import React from "react";

function Sidebar() {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#1f2937",
      color: "white",
      padding: "20px"
    }}>
      <h2>AI Dashboard</h2>

      <ul style={{listStyle:"none", padding:"0"}}>
        <li style={{margin:"20px 0"}}>Dashboard</li>
        <li style={{margin:"20px 0"}}>Analytics</li>
        <li style={{margin:"20px 0"}}>Users</li>
        <li style={{margin:"20px 0"}}>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;