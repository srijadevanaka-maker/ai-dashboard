import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", users: 200 },
  { day: "Tue", users: 350 },
  { day: "Wed", users: 500 },
  { day: "Thu", users: 700 },
  { day: "Fri", users: 650 }
];

function Charts() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>User Activity</h2>

      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Charts;