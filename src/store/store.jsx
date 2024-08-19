import './store.css';
import React, { useState, useEffect } from 'react';
import "loaders-ui/dist/main/index.min.css";
import { Spinner } from 'loaders-ui';

function Store() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => setPosts(result));
    }, []);

    const handleBuyClick = (post) => {
        setSelectedPost(post);
    };

    const closeModal = () => {
        setSelectedPost(null);
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
            
            {selectedPost && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <img src={selectedPost.image} alt={selectedPost.title} className="modal-image" />
                        <h2 className="modal-title">{selectedPost.title}</h2>
                        <p className="modal-price">${selectedPost.price}</p>
                        <p className="modal-category">Category: {selectedPost.category}</p>
                        <p className="modal-description">{selectedPost.description}</p>
                        <p className="modal-rating">Rating: {selectedPost.rating.rate} ({selectedPost.rating.count} reviews)</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Store;
