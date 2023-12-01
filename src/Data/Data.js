import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../Component/DataTable'; 
import PieChart from '../Component/PieChart'; 

const DataPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredPosts = posts.filter(post => post.userId === 1);

  return (
    <div className="data-page">
      <DataTable posts={filteredPosts} />
      <PieChart totalPosts={posts.length} user1Posts={filteredPosts} />
    </div>
  );
};

export default DataPage;
