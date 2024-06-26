import React, { useState } from 'react';
import axios from 'axios';

const SearchShops = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await axios.get('http://localhost:8095/shop/search', {
            params: { q: searchTerm }
        });
        setResults(response.data);
    };

    return (
        <div>
            <h1>Search Users</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    placeholder="Search by Shop Name, Address, or Email" 
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

export default SearchShops;
