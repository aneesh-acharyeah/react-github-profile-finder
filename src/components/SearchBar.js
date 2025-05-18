// SearchBar.js

import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';


const SearchBar = ({onSearch }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username.trim());
        }
    }
    return (
        <Form onSubmit={handleSubmit} clasName="mb-4">
            <InputGroup>
                <Form.Control type="text" placeholder="Enter Github Username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                <Button type="submit" variant="dark">Search</Button>
            </InputGroup >
        </Form >
    )
}
export default SearchBar;