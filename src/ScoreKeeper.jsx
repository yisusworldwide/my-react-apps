import { useState } from "react";

export default function ScoreKeeper({ numPlayers=0, target=0 }){
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const incrementScore = (idx) => {
        setScores((prevScores) =>{
            const copy = [...prevScores];
            copy[idx] += 1;
            return copy;
        })
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
        </div>
    );

}