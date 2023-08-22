import { useState } from "react";

export default function ScoreKeeper({ numPlayers=4, target=7 }){
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (i === idx) return score +1;
                return score;
            });
        });
        
    }

    const resetScores = () => {
        setScores(new Array(numPlayers).fill(0));    
    } 

    return (
        
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {
                    scores.map((score, idx) => {
                        return (
                        <li key={idx}>
                            Player {idx + 1} score: {score}
                            <button onClick = {() => incrementScore(idx)}>+1</button>
                            { score === target && <h3>Winner!!!</h3> }
                        </li>
                    );
                })}
            </ul>
            <button onClick={resetScores}>Reset Scores</button>
        </div>
    );
}