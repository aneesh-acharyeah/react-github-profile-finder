// ProfileCard.js

import React from 'react'
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

const ProfileCard = ({ profile }) => {
    return (

        <Card className="shadow">
            <Card.Body>
                <Row>
                    <Col md={4} className="text-center">
                        <img src={ProfileCard.avatar_url}
                            alt="avatar"
                            className='img-fluid rounded-circle mb-3' />
                        <h5>{ProfileCard.name || ProfileCard.login}</h5>
                        <p>
                            <a href={profile.html_url} target="_blank" rel="noreferrer">
                                <Button variant="dark" size="sm">View GitHub</Button>
                            </a>
                        </p>
                    </Col>
                    <Col md={8}>
                        <h5>Bio</h5>
                        <p>{profile.bio || 'No bio available.'}</p>
                        <p><strong>Location:</strong> {profile.location || 'N/A'}</p>
                        <p><strong>Public Repos:</strong> <Badge bg="secondary">{profile.public_repos}</Badge></p>
                        <p><strong>Followers:</strong> {profile.followers} | <strong>Following:</strong> {profile.following}</p>
                    </Col>
                </Row>
            </Card.Body>

        </Card>
    )
}
export default ProfileCard;