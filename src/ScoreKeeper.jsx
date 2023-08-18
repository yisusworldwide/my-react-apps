import { useState } from "react";

export default function ScoreKeeper({ numPlayers=0, target=0 }){
    const [score, setScore] = useState(new Array(numPlayers).fill(0));
    return (
        <div>
            <h2>Score Keeper</h2>
            <ul>
                {
                    score.map((score, idx) => {
                        return <li key={idx}>Player{idx + 1}</li>
                    })
                }
            </ul>
        </div>
    )

}