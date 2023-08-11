// import React, { Component } from 'react'; // jika menggunakan class penulkisan sintak
import React from 'react';
import { useState, useEffect } from 'react';
import ItemBlog from './components/blog/ItemBlog';
import Navbar from './components/Navbar';

import axios from 'axios';


//Menggunkan FUNCTIONAL CLASS
function App() {

  const [blogs, setBlogs] = useState([]);

  const handleDelete = (id) => {
    // console.log(id);
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blogs");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });


    return (
      <div>

      <Navbar brand='Halo Blog' />

        <div className="container mt-5">
        <h1 className='text-danger'>Halo Dunia</h1>
        <ItemBlog blogs={blogs} handleDelete={handleDelete} />
      </div>
      </div>
    );
}
export default App;
