// src/components/LineGraph.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from '../data/data.json';

const LineGraph: React.FC = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="totalJobs" stroke="#8884d8" />
      <Line type="monotone" dataKey="averageSalary" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineGraph;
