import './jay.css';
import React, { useState, useEffect } from 'react';

function Jay() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => setPosts(result));
    }, []);

    const handleBuyClick = (post) => {
        // Handle the Buy button click event here
        console.log(`Buying item: ${post.title}`);
    };

    return (
        <div className="store-container">
            {posts.map(post => (
                <div key={post.id} className="store-item">
                    <img src={post.image} alt={post.title} className="store-image" />
                    <div className="store-details">
                        <h2 className="store-title">{post.title}</h2>
                        <p className="store-price">${post.price}</p>
                        <p className="store-category">{post.category}</p>
                        <p className="store-rating">Rating: {post.rating.rate} ({post.rating.count})</p>
                        <button className="store-button" onClick={() => handleBuyClick(post)}>Buy</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Jay;
