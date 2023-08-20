// import React, { Component } from 'react'; // jika menggunakan class penulkisan sintak
import React from 'react';
import { useState, useEffect } from 'react';
import ItemBlog from './components/blog/ItemBlog';
import Navbar from './components/Navbar';

import axios from 'axios';


//Menggunkan FUNCTIONAL CLASS
function App() {

  const [blogs, setBlogs] = useState([]);

  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        setBlogs(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
   
  }, []);

    return (
      <div>

      <Navbar brand='Halo Blog ' />

        <div className="container mt-5">
        <h1 className='text-danger'>Halo Dunia </h1>
        {error && <h1 className='text-danger'>Eror Fetch data !</h1>}
        {Loading && <h1 className='text-dark'>Loading ...</h1>}
        <ItemBlog blogs={blogs} handleDelete={handleDelete} />
      </div>
      </div>
    );
}
export default App;
