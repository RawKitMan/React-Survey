//Get our necessary components from React and react-bootstrap
import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Work on making single choice radio buttons and how to submit the value.
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
        correct: false
    }

    //Method to move on to the next question
    incrementQuestion = (number) => {
        this.setState((state) => ({
            questionNum: state.questionNum + 1
        }))
    }

    //Grabs the answer the user clicks on and stores it in the state for later comparison
    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            guessedAnswer: event.target.value
        })
    }

    //Put the questions and available answers out for the user to answer if there are 
    //questions left to ask. Otherwise, the page will display the final outcome.
    render() {
        return (
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
                                            onChange = {this.handleChange}/>{answer}                                            
                                    </label>
                                    <br />
                                </div>
                            );
                        })}
                    </Form.Group>
                </Form>
                <Button onClick={() => { this.incrementQuestion() }} type="submit" variant='danger' size="lg" active>Submit</Button>
            </Jumbotron >
        );
    };
};


export default Trivia;