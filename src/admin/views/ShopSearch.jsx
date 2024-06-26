import React, { useState } from 'react';
import axios from 'axios';

const ShopSearch = () => {
    const [shopName, setShopName] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [email, setEmail] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await axios.get('http://localhost:8095/shop/search', {
            params: { shopName, shopAddress, email }
        });
        setResults(response.data);
    };

    return (
        <div>
            <h1>Search Users</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={shopName} 
                    onChange={(e) => setShopName(e.target.value)} 
                    placeholder="Shop Name" 
                />
                <input 
                    type="text" 
                    value={shopAddress} 
                    onChange={(e) => setShopAddress(e.target.value)} 
                    placeholder="Shop Address" 
                />
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <button type="submit">Search</button>
            </form>
            <div>
                <h2>Results</h2>
                {results.map(user => (
                    <div key={user.id}>
                        Shop Name: {user.shopName}, Shop Address: {user.shopAddress}, Email: {user.email}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopSearch;
