import React from "react";
import { PAPER, ROCK, SCISSOR } from "../../constant/Type";
import Paper from "../../icons/Paper.png";
import Rock from "../../icons/Rock.png";
import Scissor from "../../icons/Scissor.png";

const Choices = (props) => {
    const { handlePlayerChoice } = props;
    
    return (
        <div className="d-flex flex-row">
            <div>
                <img src={Rock} alt="Rock" onClick={() => handlePlayerChoice(ROCK)} />
            </div>
            <div>
                <img src={Paper} alt="Paper" onClick={() => handlePlayerChoice(PAPER)} />
            </div>
            <div>
                <img src={Scissor} alt="Scissor" onClick={() => handlePlayerChoice(SCISSOR)} />
            </div>
        </div>
    )
}

export default Choices;