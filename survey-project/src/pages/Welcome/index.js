import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Welcome extends Component {
    render() {
        return (
            <Jumbotron>
                <Container>
                    <p>Test your knowledge of World of Warcraft. Click below to begin</p>
                    <Button href='/trivia' variant='danger' size="lg" active>Begin</Button>
                </Container>
            </Jumbotron >
        )
    }
}

export default Welcome; 