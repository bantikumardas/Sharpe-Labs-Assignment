import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './PieChart.css';

const PieChartComponent = ({ totalPosts, user1Posts }) => {
  const data = [
    { name: 'User ID 1', value: user1Posts.length },
    { name: 'Other Users', value: totalPosts - user1Posts.length },
  ];

  const COLORS = ['#0088FE', '#00C49F']; //  colors

  return (
    <div className="pie-chart">
      <div className="PieChart-component">
        <h3>Posts Distribution</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartComponent;
