import React, { useEffect, useState } from "react";
import { PAPER, ROCK, SCISSOR } from "../../constant/Type";
import Choices from "../choices/Choices";
import GameText from "../gameText/GameText";
import ScoreBoard from "../scoreBoard/ScoreBoard";

const Game = () => {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [playerChoice, setPlayerChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [winner, setWinner] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (playerChoice === computerChoice) {
            return;
        } else if (playerChoice === ROCK) {
            if (computerChoice === SCISSOR) {
                setPlayerScore(playerScore + 1);
            } else {
                setComputerScore(computerScore + 1);
            }
        } else if (playerChoice === PAPER) {
            if (computerChoice === ROCK) {
                setPlayerScore(playerScore + 1);
            } else {
                setComputerScore(computerScore + 1);
            }
        } else if (playerChoice === SCISSOR) {
            if (computerChoice === PAPER) {
                setPlayerScore(playerScore + 1);
            } else {
                setComputerScore(computerScore + 1);
            }
        }
    }, [playerChoice, computerChoice]);

    const handlePlayerChoice = (choice) => {
        if (!gameStarted) {
            setGameStarted(true);
        }
        setPlayerChoice(choice);
        handleComputerChoice();
    }

    const handleComputerChoice = () => {
        const choices = [ROCK, PAPER, SCISSOR];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    }

    return (
        <div className="">
            <ScoreBoard 
                playerScore={playerScore}
                computerScore={computerScore}
            />
            <div className="mt-5">
                {
                    gameStarted ? 
                    <GameText 
                        playerChoice={playerChoice}
                        computerChoice={computerChoice}
                    />
                    :
                    <h2>Lets Start The Game!</h2>
                }
            </div>
            <div className="d-flex justify-content-center mt-4">
                <Choices 
                    handlePlayerChoice={handlePlayerChoice}
                />
            </div>
            <div className="mt-3">
                <h2>Make your choice!</h2>
            </div>
        </div>
    )
}

export default Game;