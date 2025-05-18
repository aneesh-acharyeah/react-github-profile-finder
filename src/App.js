// App.js

import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setProfile(null);

    try {
      const res = await axios.get(`https://api.github.com/users/${username}`)
      setProfile(res.data);
    } catch (err) {
      setError('User not found or API limit exceeded.')
    } finally {
      setLoading(false);
    }
  }
  return (
    <Container className="py-5">
      <h1 className='text-center mb-4'>🔍 GitHub Profile Finder</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className='text-center' my-4>
          <Spinner animation="border" />
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {
        profile && (
          <Row className="justify-content-center">
            <Col md={8}>
              <ProfileCard profile={profile} />
            </Col>
          </Row>
        )
      }
    </Container>
  )

}

export default App;
