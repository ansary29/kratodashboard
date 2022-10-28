import './Example.css'
import React from "react";
import { BarChart, Bar,YAxis } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 20,
   
  },
  {
    name: "Page B",
    uv: 30
   
  },
  {
    name: "Page C",
    uv: 80,
  
  },
  {
    name: "Page D",
    uv: 40,
  
  },
  {
    name: "Page E",
    uv: 20,
   
  }
  
];

export default function Example() {
  return (
    <div className='bar'>
    <BarChart width={150} height={100} data={data}>
      <Bar dataKey="uv" fill="#8884d8" />
      <YAxis />
    </BarChart>
    </div>
  );
}