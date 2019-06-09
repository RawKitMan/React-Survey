import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


// Work on making single choice radio buttons and how to submit the value.
class Survey extends Component {


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
        questionNum: 0,
    }

    incrementQuestion = (number) => {
        this.setState((state) => ({
            questionNum: state.questionNum + 1
        }))
    }

    render() {
        return (
            <Jumbotron key={this.state.questionNum}>
                <p>{this.state.questions[this.state.questionNum]}</p>
                {this.state.answers[this.state.questionNum].map((answer) => {
                    return (
                        <Form>
                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check inline label={answer} type="radio" id={`inline-radio-${answer}`} value={answer} />
                            </div>
                        </Form>

                    );
                })}
                <Button onClick={() => { this.incrementQuestion() }} type="submit" variant='danger' size="lg" active>Submit</Button>
            </Jumbotron >
        );
    };
};

export default Survey;