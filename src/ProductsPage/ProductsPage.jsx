import React, { useState, useEffect } from 'react';
import './ProductsPage.css';
import { PulsatingRings, RotatingDots, Spinner, ZigZagLine } from 'loaders-ui';

function ProductsPage({ addToCart }) {
    const [posts, setPosts] = useState([]);
    const [IsLoading, setLoading] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => {

                setLoading(false)
                
                setPosts(result)


            });
    }, []);

    const handleBuyClick = (post) => {
        setSelectedPost(post);
    };

    const closeModal = () => {
        setSelectedPost(null);
    };

    const handleAddToCart = () => {
        if (selectedPost) {
            addToCart(selectedPost);
            closeModal(); // Close modal after adding to cart
        }
    };

    return IsLoading? 
    <div>
        <RotatingDots

        />
    </div>: (
        
        <>
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
                        <button className="modal-add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default ProductsPage;
