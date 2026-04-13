import React from "react";
import MetricsCard from "../components/MetricsCard";
import Charts from "../components/Charts";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex", background: "#f3f4f6", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ padding: "30px", flex: 1 }}>
        <h1>AI Analytics Dashboard</h1>

        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <MetricsCard title="Total Users" value="1,245" />
          <MetricsCard title="AI Accuracy" value="94%" />
          <MetricsCard title="API Requests" value="8,230" />
          <MetricsCard title="Active Sessions" value="312" />
        </div>

        <div style={{ marginTop: "40px" }}>
          <Charts />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;