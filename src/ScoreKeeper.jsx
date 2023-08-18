import { useState } from "react";

export default function ScoreKeeper({ numPlayers=0, target=0 }){
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
            <h2>Score Keeper</h2>
            <ul>
                {
                    scores.map((score, idx) => {
                        return (
                        <li key={idx}>
                            Player {idx + 1} score: {score}
                            <button onClick = {() => incrementScore(idx)}>+1</button>
                        </li>
                        
                    );
                })}
            </ul>
            <button onClick={resetScores}>Reset Scores</button>
        </div>
    );

}