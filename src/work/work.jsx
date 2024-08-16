import React, { useState, useEffect } from 'react';

import './work.css'

function Work(){

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12').then(
           (response) => response.json().then((result)=> setPosts(result))
        );
     }, []);

    return(
        <>
        <div className="big">
        {
            posts.map((post) => <div className='Main'  key={post.id}>
                <p>{post.title}</p>

                <h2>{post.body}</h2>
            </div>)
}

</div>  </>
    )
};



export default Work;