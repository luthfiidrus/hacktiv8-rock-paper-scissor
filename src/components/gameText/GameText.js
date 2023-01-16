import React from "react";
import { PAPER, ROCK, SCISSOR } from "../../constant/Type";

const GameText = (props) => {
    const { playerChoice, computerChoice } = props;

    const ComputeWinner = () => {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (playerChoice === ROCK) {
            if (computerChoice === SCISSOR) {
                return "Rock breaks scissor. You win!";
            } else {
                return "Paper covers rocks. You lose!";
            }
        } else if (playerChoice === PAPER) {
            if (computerChoice === ROCK) {
                return "Paper covers rocks. You win!";
            } else {
                return "Scissor cuts paper. You lose!";
            }
        } else if (playerChoice === SCISSOR) {
            if (computerChoice === PAPER) {
                return "Scissor cuts paper. You win!";
            } else {
                return "Rock breaks scissor. You lose!";
            }
        }
    }

    return (
        <div>
            <h2>
                <ComputeWinner />
            </h2>
        </div>
    )
}

export default GameText;