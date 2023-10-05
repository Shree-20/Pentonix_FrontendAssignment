import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../utils/auth';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  
  useEffect(() => {

    const randomData = [...Array(10)].map((_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
      category: Math.random() < 0.5 ? 'Category A' : 'Category B'
    }));
    setData(randomData);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === '' || item.category === filter);
  });

  if (!isAuthenticated()){
    return <redirect to="/login"/>;
  }

  return (
    <div className="dashnoard-container">
      <h2>Dashboard</h2>
      <div className="filter-search-container">
        <label>Filter by Category:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
        </select>
        <label>Search:</label>
        <input type="text" value={search} onChange={handleSearchChange} />
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
