import React from "react";

const ItemBlog = ({blogs, handleDelete}) => {

   

    return ( 
        <div>
        { blogs.map((blog, index) => (
          <div key={blog.id} className='card p-3 mb-3'>
            <h3>{blog.title}</h3>
            <p><i>Post By {blog.author}</i></p>
            <p>{blog.body.slice(0, 40)}</p>
            <button onClick={() => handleDelete(blog.id)} className="btn btn-danger col-1">Delete</button>
          </div>
        ) ) }
        </div>
     );
}
 
export default ItemBlog;