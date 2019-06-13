import React, {Component} from 'react';

class ScoreScreen extends Component{

    render() {
        return(
            <div>
                <p>Game Over</p>
                {(this.props.guessedRight > this.props.guessedWrong) ?
                    (<h2>YOU WIN</h2>) : (<h2>YOU LOSE</h2>)
                    }
            </div>
        )
    }
};

export default ScoreScreen;