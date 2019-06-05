import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


let questions = {
    1: { question: "Who is the son of King Varian Wrynn?", answers: ["Thrall", "Anduin", "Magni", "Cho'gall"] },
    2: { question: "Who am I?", answers: ["Herp", "Derp", "CJ", "Nerp"] }
};

// Work on making single choice radio buttons and how to submit the value.
class Survey extends Component {

    constructor(props) {
        super(props);
        this.state = {

            guessedRight: 0,
            guessedWrong: 0,
            questionNum: 1

        }

        this.state.question = questions[this.state.questionNum].question
       

        this.state.answers = questions[this.state.questionNum].answers
        
    }


    incrementQuestion = () => {

        this.setState((state) => {
            console.log(state);
            return ({
                questionNum: state.questionNum + 1
            })
        });
    }

    render() {
        return (
            <Jumbotron key={this.state.questionNum}>
                <p>{this.state.question}</p>
                {this.state.answers.map((answer) => {
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
    }
};

export default Survey;