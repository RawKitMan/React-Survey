import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';


let questions = {
    1: { question: "Who is the son of King Varian Wrynn?", answers: ["Thrall", "Anduin", "Magni", "Cho'gall"] }
};

let questionNum = 1;
// Work on making single choice radio buttons and how to submit the value.
class Survey extends Component {

    state = {
        question: questions[questionNum].question,
        guessedRight: 0,
        guessedWrong: 0,
        answers: questions[questionNum].answers
    }

    render() {
        return (
            <Jumbotron>
                <p>{this.state.question}</p>
                {this.state.answers.map((answer) => {
                    return (
                        <Form>
                            <div key={`inline-radio`} className="mb-3">
                                <Form.Check inline label={answer} type="radio" id={`inline-radio-${answer}`} value = {answer} />
                            </div>
                        </Form>
                    );
                })}
            </Jumbotron>
        );
    }
};

export default Survey;