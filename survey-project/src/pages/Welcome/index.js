import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Welcome extends Component {
    render() {
        return (

            <Jumbotron>
                <Container>
                    <p>This is my welcome page. Click the button to begin.</p>
                    <Button href='/survey' variant='danger' size="lg" active>Begin Survey</Button>
                </Container>
            </Jumbotron >
        )
    }
}

export default Welcome; 