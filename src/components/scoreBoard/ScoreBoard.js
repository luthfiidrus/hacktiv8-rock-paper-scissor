import React from "react";
import style from "./ScoreBoard.module.css";

const ScoreBoard = (props) => {

    const { playerScore, computerScore } = props;

    return (
        <div className="container text-center mt-4">
            <div className="row">
                <div className={`col ${style.textColor} ${style.nameBox} ${style.userBox}`}>
                    User
                </div>
                <div className={`col ${style.textColor} ${style.scoreBox}`}>
                    {playerScore} : {computerScore}
                </div>
                <div className={`col ${style.textColor} ${style.nameBox} ${style.compBox}`}>
                    Comp
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;