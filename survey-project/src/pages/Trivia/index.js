//Get our necessary components from React and react-bootstrap
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//Get our score screen
import ScoreScreen from "../../components/ScoreScreen";

//The Trivia Component in all of its glory.
class Trivia extends Component {

    //The state for our Trivia game
    state = {

        guessedRight: 0,
        guessedWrong: 0,
        questions: [
            "Who is the son of King Varian Wrynn?",
            "Who am I?",
            "Did this work?"
        ],
        answers: [
            ["Thrall", "Anduin", "Magni", "Cho'gall"],
            ["Herp", "Derp", "CJ", "Nerp"],
            ["Yes", "Maybe", "Idk", "I guess"]
        ],
        correctAnswers: [1, 2, 0],
        guessedAnswer: 0,
        questionNum: 0,
        correct: false,
        show: false
    }

    //Closes the modal
    handleClose() {
        this.setState({ show: false });
    }

    //Opens the modal
    handleShow() {
        this.setState({ show: true });
    }

    //Method to move on to the next question
    incrementQuestion = (number) => {
        this.setState((state) => ({
            questionNum: state.questionNum + 1
        }))
    }

    //Grabs the answer the user clicks on and stores it in the state for later comparison
    handleChange = (event) => {

        this.setState({
            guessedAnswer: event.target.value
        })
    }

    //We want to track how many the user gets right or gets wrong. We then change the correct state property based on the answer submitted.
    keepScore = () => {
        
        if (parseInt(this.state.guessedAnswer) === this.state.correctAnswers[this.state.questionNum]) {
            this.setState((state) => ({
                guessedRight: state.guessedRight + 1,
                correct: true
            }))
        }
        else {
            this.setState((state) => ({
                guessedWrong: state.guessedWrong + 1,
                correct: false
            }))
        }
    }

    //Put the questions and available answers out for the user to answer if there are 
    //questions left to ask. Otherwise, the page will display the final outcome.
    render() {

        //Boolean value that helps us determine if we have any questions left to go.
        let haveMoreQuestions = this.state.questionNum < this.state.questions.length;


        //The meat of it all. If we have questions left to answer, the page will show the question the user is currently on.
        //The user clicks the radio button to submit their guess and submit it. A modal will appear telling the user if they 
        //are correct or not.

        //Once all of the questions have been asked, the user is taken to a score screen. If they guessed more than 50% correctly,
        //the user wins.
        return (
            <div>
                {haveMoreQuestions ? (
                    <div>
                        <Jumbotron key={this.state.questionNum}>
                            <p>{this.state.questions[this.state.questionNum]}</p>
                            <Form>
                                <Form.Group>
                                    {this.state.answers[this.state.questionNum].map((answer, index) => {
                                        return (
                                            <div>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="radio-answers"
                                                        value={index}
                                                        onChange={this.handleChange} />{answer}
                                                </label>
                                                <br />
                                            </div>
                                        );
                                    })}
                                </Form.Group>
                            </Form>
                            <Button onClick={() => {
                                this.handleShow();
                                this.keepScore();
                            }}
                                type="submit"
                                variant='danger'
                                size="lg"
                                active>
                                Submit
                        </Button>
                        </Jumbotron >
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                {(this.state.correct) ? (
                                    <h2>Correct</h2>
                                ) : (
                                        <h2>Incorrect</h2>
                                    )}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={() => {this.handleClose(); this.incrementQuestion();}}>
                                    Next Question
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </div>
                ) : (
                        <Jumbotron>
                            <ScoreScreen
                                guessedRight={this.state.guessedRight}
                                guessedWrong={this.state.guessedWrong}
                            />
                        </Jumbotron>
                    )
                }
            </div>
        );
    };
};

export default Trivia;